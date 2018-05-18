<template lang="html">
    <div class="hello-extend ancestors">
        <div class="car">
            <p>组件一</p>
            <Car></Car>
        </div>
        <div class="rongguang">
            <p>组件二</p>
            <Rongguang></Rongguang>
        </div>
    </div>
</template>

<script>
// refers: [https://cn.vuejs.org/v2/api/#extends]
import Car from './vue-extend/Car.vue';
import Rongguang from './vue-extend/Rongguang.vue';

export default {
    components: {
        Car,
        Rongguang
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="less">
.hello-extend {
    & > div {
        padding: 1em;
        &:first-child {
            border-bottom: 1px solid #aaa;
        }
    }
}
</style>
