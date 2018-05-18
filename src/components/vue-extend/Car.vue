<template lang="html">
    <div class="car">
        <p>{{model}}</p>
        <button @click="onBuzzer">鸣喇叭</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: '车'
        };
    },
    methods: {
        onBuzzer() {
            alert('我是' + this.model);
        }
    }
};
</script>

<style lang="less">
</style>
