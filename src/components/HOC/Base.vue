<template>
    <div id="base">
        <span @click="baseClick">Props: {{value}}</span>
        <slot name="slot1"></slot>
        <p>==========分割线==========</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'baseComponent',
    props: {
        value: String || Number
    },
    methods: {
        baseClick() {
            console.log('inside');
            this.$emit('baseClick', 'to outside');
        }
    }
};
</script>

<style>

</style>
