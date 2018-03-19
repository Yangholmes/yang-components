<template lang="html">
    <div ref="meizuLoading" class="meizu" :style="{'font-size': size}">
        <span></span>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: '200px'
        }
    },
    computed: {
    },
    data() {
        return {
        };
    },
    methods: {

    }
};
</script>

<style lang="less">
.meizu {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    box-shadow: inset 0 0 0 .1em rgba(58, 168, 237, .2);
    span {
        position: absolute;
        clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);
        width: 1em;
        height: 1em;
        animation: meizu-circle-clockwise 2.5s ease-in-out infinite;
        &:after {
            content: '';
            position: absolute;
            clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);
            width: 1em;
            height: 1em;
            animation: spinner-circle 2.5s ease-in-out infinite;
            border-radius: 50%;
            box-shadow: inset 0 0 0 .1em #3aa8ed;
        }
    }
}

@keyframes meizu-circle-clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(180deg);
    }
}
@keyframes spinner-circle {
    0% {
        transform: rotate(-180deg);
    }

    100% {
        transform: rotate(180deg);
    }
}
</style>
