<template>
    <div class="tutorial-tip"
        :style="
            `top: ${tipBoundary.top}px;
            left: ${tipBoundary.left}px;
            width: ${tipBoundary.width}px;
            height: ${tipBoundary.height}px;`">
        <div>{{tip}}</div>
        <div class="operation">
            <button @click="onPrev">上一步</button>
            <button @click="onNext">下一步</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tipBoundary: {
            type: Object
        },
        tip: {
            type: String,
            default: ''
        }
    },
    methods: {
        onPrev() {
            this.$emit('prev');
        },
        onNext() {
            this.$emit('next');
        }
    }
};
</script>

<style lang="less">
.tutorial-tip {
    @backgroundColor: rgba(255, 255, 255, .7);
    display: inline-block;

    padding: .5em;
    // width: 20em;
    // height: 5em;

    border-radius: 5px;
    box-shadow: 0 0 3px 2px #aaa;
    background-color: @backgroundColor;

    position: absolute;
    z-index: 10001;
}
</style>
