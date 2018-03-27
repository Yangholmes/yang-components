<template lang="html">
    <div class="hello-ex-table">
        <ExTable class="ex-table" :columns="columns" :data="data" :cellWidth="width"></ExTable>
    </div>
</template>

<script>
import ExTable from '@/components/ex-table';

import res from './ex-table/temp/columns.json';

export default {
    components: {
        ExTable
    },
    mounted() {
        this.init();
    },
    data() {
        return {
            columns: [],
            data: [],
            width: '50px'
        };
    },
    methods: {
        init() {
            window.setTimeout(function () {
                this.columns = this.renderCell(res.data[0].columns);
                this.data = res.data[0].data;
            }.bind(this), 200);
        },
        renderCell(columns) {
            for (let i = 0; i < columns.length; i++) {
                if (!columns[i].child || !columns[i].child.length) {
                    if (!columns[i].fixed) {
                        columns[i].render = (h, params) => {
                            let row = params.row;
                            let key = params.column.key;
                            return h('span', {
                                // domProps: {
                                //     innerHTML: row[key]
                                // },
                                class: row[key] ? 'fa fa-plus-circle' : 'fa fa-minus-circle',
                                style: {
                                    color: row[key] ? '#19be6b' : '#ed3f14'
                                }
                            }, row[key]);
                        };
                    }
                }
                else {
                    this.renderCell(columns[i].child);
                }
            }
            return columns;
        }
    }
};
</script>

<style lang="less">
.hello-ex-table {
    width: 100%;
    padding: 2em;
    .ex-table {
        // width: 100%;
        height: 500px;
        line-height: 1.5em;
    }
}
</style>
