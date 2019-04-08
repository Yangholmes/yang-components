<template>
    <div class="tutorial">
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        this.init();
    },
    methods: {
        init() {
            console.log(this.lessons);
        }
    },
    computed: {
        lessons() {
            return this.$children.filter(e => e.$options.componentName === 'lesson');
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="less">

</style>
