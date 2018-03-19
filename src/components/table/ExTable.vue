<template lang="html">
    <div class="ex-table">
        <table>
            <ExTheader :columns="columns"></ExTheader>
        </table>
    </div>
</template>

<script>
import ExTheader from './ExTheader.vue';
import ExTbody from './ExTbody.vue';
import ExTfooter from './ExTfooter.vue';

export default {
    components: {
        ExTheader,
        ExTbody,
        ExTfooter
    },
    props: {
        columns: {
            type: Array,
            default() {
                return [];
            }
        },
        data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="less">
</style>
