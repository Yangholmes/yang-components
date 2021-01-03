<template>
    <ul class="bullet-chat-board">
        <Bullet></Bullet>
    </ul>
</template>

<script>
import Bullet from './Bullet';

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
            bulletList: []
        };
    },
    watch: {
        bullets(val) {
            if (val && val.length > 0) {
                this.bulletList.push(...val);
            }
        }
    },
    methods: {}
};
</script>

<style lang="less">
.bullet-chat-board {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
