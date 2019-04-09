<template>
    <div class="tutorial">
        <slot></slot>
        <Tip></Tip>
    </div>
</template>

<script>
import tutorialMask from './tutorialMask.js';
import Tip from './Tip';

export default {
    mounted() {
        this.init();
    },
    methods: {
        init() {
            window.addEventListener('resize', this.onWindowResize);
            this.mask = tutorialMask(false);
            this.queryLessons();
            this.getBoundary();
        },
        queryLessons() {
            this.lessons = this.$children.filter(e => e.$options.componentName === 'lesson');
        },
        getBoundary() {
            let bodyBoundary = {
                width: document.body.offsetWidth,
                height: document.body.offsetHeight
            };
            this.lessons = this.lessons.map(e => {
                e.boundary = {
                    top: e.$el.offsetTop,
                    right: bodyBoundary.width - e.$el.offsetWidth - e.$el.offsetLeft,
                    bottom: bodyBoundary.height - e.$el.offsetHeight - e.$el.offsetTop,
                    left: e.$el.offsetLeft,
                    width: e.$el.offsetWidth,
                    height: e.$el.offsetHeight
                };
                return e;
            }).sort((a, b) => a.tab - b.tab);
            this.lessons[0].float = true;
        },
        onWindowResize() {
            this.getBoundary();
        }
    },
    data() {
        return {
            mask: {}
        };
    }
};
</script>

<style lang="less">

</style>
