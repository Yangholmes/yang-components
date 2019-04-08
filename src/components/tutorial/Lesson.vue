<template>
    <div class="lesson">
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
        }
    },
    data() {
        return {
            type: 'lesson'
        };
    }
};
</script>

<style>

</style>
