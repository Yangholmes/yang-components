<template lang="html">
    <div class="ex-table">
        <table>
            <ExTheader :columns="columns" @genKeys="genKeys"></ExTheader>
            <ExTbody :data="data" :keys="keys"></ExTbody>
        </table>
    </div>
</template>

<script>
import ExTheader from './ExTheader.vue';
import ExTbody from './ExTbody.vue';
import ExTfooter from './ExTfooter.vue';

import res from './temp/columns.json';

export default {
    components: {
        ExTheader,
        ExTbody,
        ExTfooter
    },
    props: {
        // columns: {
        //     type: Array,
        //     default() {
        //         return [];
        //     }
        // },
        // data: {
        //     type: Array,
        //     default() {
        //         return [];
        //     }
        // }
    },
    computed: {
        columns() {
            res.data[0].columns[0].render = (h, params) => {
                let key = params.column.key;
                return h('p', {
                    domProps: {
                        innerHTML: params.row[key]
                    },
                    style: {
                        color: 'rgba(100, 70, 200, .9)'
                    }
                });
            };
            return res.data[0].columns;
        },
        data() {
            return res.data[0].data;
        }
    },
    data() {
        return {
            keys: []
        };
    },
    methods: {
        genKeys(val) {
            this.keys = val;
        }
    }
};
</script>

<style lang="less">
.ex-table {
    color: #495060;
    font-size: 16px;
    background-color: #fff;
    font-family: Microsoft YaHei, Arial, sans-serif;
    table {
        font-size: .75em;
        border-collapse: collapse;
        border: 1px solid #e9eaec;
    }
}
</style>
