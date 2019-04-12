<template>
    <div class="tutorial">
        <slot></slot>
        <Tip v-if="show"
            :lessons="lessons"
            :tab="current" :tipBoundary="tipBoundary"
            @skip="onSkipTutorial" @complete="onComplete"
            @prev="onPrevTab" @next="onNextTab"></Tip>
    </div>
</template>

<script>
import tutorialMask from './tutorialMask.js';
import Tip from './Tip';

export default {
    model: {
        prop: 'show',
        event: 'change'
    },
    props: {
        show: {
            type: Boolean
        }
    },
    components: {
        Tip
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            window.addEventListener('resize', this.onWindowResize);
            this.mask = tutorialMask(!this.show);
            this.queryLessons();
            this.onTab(0);
        },
        queryLessons() {
            this.lessons = this.$children.filter(e => e.$options.componentName === 'lesson').sort((a, b) => a.tab - b.tab);
        },
        getBoundary() {
            let bodyBoundary = {
                width: document.body.offsetWidth,
                height: document.body.offsetHeight
            };
            let lesson = this.lessons[this.current];
            lesson.boundary = {
                top: lesson.$el.offsetTop,
                right: bodyBoundary.width - lesson.$el.offsetWidth - lesson.$el.offsetLeft,
                bottom: bodyBoundary.height - lesson.$el.offsetHeight - lesson.$el.offsetTop,
                left: lesson.$el.offsetLeft,
                width: lesson.$el.offsetWidth,
                height: lesson.$el.offsetHeight
            };
            this.setTipBoundary();
        },
        setTipBoundary() {
            // 规则如下，Tip 放置在空位最大的方位
            // 四个方位空位大小一致的情况下，优先设置到 Lesson 下方
            let lesson = this.lessons[this.current];
            let direction = ['top', 'right', 'bottom', 'left'].reduce((a, p) => {
                return lesson.boundary[p] > lesson.boundary[a] ? p : a;
            });
            let offset = {top: 0, left: 0};
            switch (direction) {
                case 'top':
                    offset = {
                        top: lesson.boundary.top - this.tipBoundary.height,
                        left: lesson.boundary.left + lesson.boundary.width / 2 - this.tipBoundary.width / 2
                    };
                    break;
                case 'right':
                    offset = {
                        top: lesson.boundary.top + lesson.boundary.height / 2 - this.tipBoundary.height / 2,
                        left: lesson.boundary.left + lesson.boundary.width
                    };
                    break;
                case 'bottom':
                    offset = {
                        top: lesson.boundary.top + lesson.boundary.height,
                        left: lesson.boundary.left + lesson.boundary.width / 2 - this.tipBoundary.width / 2
                    };
                    break;
                case 'left':
                    offset = {
                        top: lesson.boundary.top + lesson.boundary.height / 2 - this.tipBoundary.height / 2,
                        left: lesson.boundary.left - this.tipBoundary.width
                    };
                    break;
                default:
                    offset = {
                        top: lesson.boundary.top + lesson.boundary.height,
                        left: lesson.boundary.left + lesson.boundary.width / 2 - this.tipBoundary.width / 2
                    };
                    break;
            }
            this.tipBoundary = Object.assign(this.tipBoundary, offset);
        },
        onWindowResize() {
            this.getBoundary();
        },
        hideTutorial() {
            this.$emit('change', false);
            this.mask.hide();
        },
        showTutorial() {
            this.$emit('change', true);
            this.mask.show();
        },
        onTab(index) {
            this.current = index || 0;
            this.lessons.forEach((e, i) => {
                index === i ? (e.float = true) : (e.float = false);
            });
            this.getBoundary();
        },
        onPrevTab() {
            let index = this.current <= 0 ? 0 : --this.current;
            this.onTab(index);
        },
        onNextTab() {
            let index = this.current >= this.lessons.length - 1 ? this.current : ++this.current;
            this.onTab(index);
        },
        onSkipTutorial() {
            this.hideTutorial();
            this.$emit('skip', this.current);
        },
        onComplete() {
            this.hideTutorial();
            this.$emit('complete');
        }
    },
    watch: {
        show(val) {
            val ? this.showTutorial() : this.hideTutorial();
        }
    },
    data() {
        return {
            lessons: [],
            current: 0,
            tipBoundary: {
                width: 320,
                height: 80
            },
            mask: {}
        };
    }
};
</script>

<style lang="less">

</style>
