<template>
    <ul class="bullet-chat-board">
        <Bullet v-for="(bullet, i) in bulletList"
            :key="bullet.id || i"
            :bullet="bullet"
            @onFeedback="onFeedback"
            :style="`transform: translateX(${bullet.progress * boundary.width}px);`">
        </Bullet>
    </ul>
</template>

<script>
import Bullet from './Bullet';
import defaultBullet from './defaultBullet';

export default {
    name: 'bullet-chat-board',
    components: {Bullet},
    props: {
        bullets: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            boundary: {},
            bulletList: [],
            timer: null
        };
    },
    watch: {
        bullets(val) {
            if (val && val.length > 0) {
                this.bulletList.push(...this.bulletCheck(val));
            }
        }
    },
    mounted() {
        this.getSize();
        window.requestAnimationFrame(this.play);
    },
    methods: {
        getSize() {
            this.boundary = this.$el.getBoundingClientRect();
        },
        bulletCheck(arr) {
            // 配置检查
            if (!arr.length) {
                return false;
            }
            return arr.map(e => {
                let bullet = {...e};
                let style = {
                    ...defaultBullet.style,
                    ...bullet.style
                };
                let top = Number.parseInt(style.top, 10);
                top = isNaN(top) ? Math.round(Math.random() * this.boundary.height) : top;
                style.top = top + 'px';
                return Object.assign({}, bullet, {
                    style,
                    top: top,
                    progress: 1,
                    v: bullet.v || defaultBullet.v,
                    context: bullet.context.trim()
                });
            });
        },
        onFeedback(b) {
            // 修正超出屏幕的弹幕
            const {id, width, height} = b;
            const index = this.bulletList.findIndex(b => b.id === id);
            if (index === -1) {
                return false;
            }
            let bullet = this.bulletList[index];
            if (bullet.top + height > this.boundary.height) {
                console.log(this.boundary.height, height, this.boundary.height - height);
                bullet.top = Math.floor(this.boundary.height - height);
                bullet.style.top = bullet.top + 'px';
            }
            this.bulletList.splice(index, 1, {
                ...bullet,
                width,
                height
            });
        },
        play(timestamp) {
            // 位置计算
            if (!this.timer) {
                this.timer = timestamp;
            }
            if (timestamp - this.timer > 10) {
                this.bulletList = this.bulletList.map(b => {
                    const width = b.width;
                    const v = b.v / 2;
                    const currentPosition = b.progress * this.boundary.width;
                    if (currentPosition >= width * -1 - 10) {
                        // 比弹幕自身还要多10个像素，确保弹幕完全飞出容器
                        const nextPosition = currentPosition - v;
                        const nextProgress = nextPosition / this.boundary.width;
                        b.progress = nextProgress;
                    }
                    return b;
                });
                this.timer = timestamp;
            }
            window.requestAnimationFrame(this.play);
        }
    }
};
</script>

<style lang="less">
.bullet-chat-board {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
    position: relative;
}
</style>
