<template>
    <div class="tutorial-lesson" :class="float && 'float'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    componentName: 'lesson',
    props: {
        tab: {
            type: Number || String,
            default: 0
        },
        tip: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            type: 'lesson',
            float: false
        };
    }
};
</script>

<style lang="less">
.tutorial-lesson {
    position: relative;
    display: block;
    width: auto;
    height: auto;

    &.float {
        z-index: 10001;
        background: #fff;
        // box-shadow: 0 0 3px 2px #ccc;
        border-radius: 5px;
    }
}
</style>
