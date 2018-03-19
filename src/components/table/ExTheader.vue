<template lang="html">
    <thead>
        <tr>

        </tr>
    </thead>
</template>

<script>
export default {
    props: {
        columns: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    mounted() {
        this.genHeader();
    },
    data() {
        return {
            header: {
                top: [],
                middle: [],
                bottom: []
            }
        };
    },
    methods: {
        genHeader() {

        }
    }
};
</script>

<style lang="less">
</style>
