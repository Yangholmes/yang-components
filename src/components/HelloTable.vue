<template lang="html">
    <div class="hello-ex-table">
        <ExTable class="ex-table" :columns="columns" :data="data"></ExTable>
    </div>
</template>

<script>
import ExTable from '@/components/table';

import res from './table/temp/columns.json';

export default {
    components: {
        ExTable
    },
    computed: {
        columns() {
            res.data[0].columns[0].render = (h, params) => {
                let key = params.column.key;
                return h('span', {
                    domProps: {
                        innerHTML: params.row[key]
                    },
                    style: {
                        color: '#000'
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
        return {};
    }
};
</script>

<style lang="less">
.hello-ex-table {
    width: 100%;
    height: 100%;
    padding: 2em;
    position: absolute;
    .ex-table {
        width: 100%;
        height: 500px;
    }
}
</style>
