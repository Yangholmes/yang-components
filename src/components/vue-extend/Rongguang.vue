<template lang="html">
    <div class="rongguang">
        <p>{{model}}</p>
        <button @click="onBuzzer">鸣喇叭</button>
        <button @click="onTranslate(0)">变身客车</button>
        <button @click="onTranslate(1)">变身货车</button>
    </div>
</template>

<script>
import Car from './Car';
export default {
    extends: Car,
    data() {
        return {
            model: '五菱荣光',
            types: ['客车', '货车']
        };
    },
    mounted() {
        console.log(Car);
    },
    methods: {
        onTranslate(type) {
            alert('我是' + this.types[type]);
        }
    }
};
</script>

<style lang="less">
</style>
