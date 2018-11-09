<template>
    <div>
        <NewBase id="new-base" :value="'传个值'" @baseClick="onBaseClick">
            <p slot="slot1">狗狗狗狗狗狗</p>
            <p>ggg</p>
        </NewBase>
    </div>
</template>

<script>
import hoc1 from './hoc(template).js';
import hoc2 from './hoc(render).js';
import Base from './Base.vue';

// console.log(hoc2(Base));

export default {
    name: 'HOCIndex',
    components: {
        NewBase: hoc2(Base)
    },
    methods: {
        onBaseClick(v) {
            console.log(v);
        }
    }
};
</script>

<style>

</style>
