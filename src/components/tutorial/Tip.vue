<template>
    <div class="tutorial-tip"
        :style="
            `top: ${tipBoundary.top}px;
            left: ${tipBoundary.left}px;
            width: ${tipBoundary.width}px;
            height: ${tipBoundary.height}px;`">
        <div>{{tip}}</div>
        <div class="operation">
            <button @click="onSkip" v-if="tab < total - 1">跳过</button>
            <button @click="onPrev" v-if="tab > 0">上一步</button>
            <button @click="onNext" v-if="tab < total - 1">下一步</button>
            <button @click="onComplete" v-if="tab === total - 1">完成</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tipBoundary: {
            type: Object
        },
        lessons: {
            type: Array
        },
        tab: {
            type: Number,
            default: 0
        }
    },
    computed: {
        total() {
            return this.lessons.length;
        },
        tip() {
            return this.lessons && this.lessons[this.tab] && this.lessons[this.tab].tip;
        }
    },
    methods: {
        onSkip() {
            this.$emit('skip');
        },
        onPrev() {
            this.$emit('prev');
        },
        onNext() {
            this.$emit('next');
        },
        onComplete() {
            this.$emit('complete');
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
    // box-shadow: 0 0 3px 2px #aaa;
    background-color: @backgroundColor;

    position: absolute;
    z-index: 10001;
}
</style>
