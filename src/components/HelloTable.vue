<template lang="html">
    <div class="hello-ex-table">
        <ExTable class="ex-table" :columns="columns" :data="data" :cellWidth="width"></ExTable>
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
            return res.data[0].columns;
        },
        data() {
            return res.data[0].data;
        }
    },
    data() {
        return {
            // columns: [{
            //     title: 'Name',
            //     key: 'name',
            //     width: '120px'
            // }, {
            //     title: 'Skills',
            //     child: [{
            //         title: 'Drive',
            //         child: [{
            //             title: 'Bus',
            //             key: 'bus'
            //         }, {
            //             title: 'Car',
            //             key: 'car'
            //         }]
            //     }, {
            //         title: 'Code',
            //         child: [{
            //             title: 'php',
            //             key: 'php'
            //         }, {
            //             title: 'C++',
            //             key: 'cpp'
            //         }]
            //     }]
            // }],
            // data: [{
            //     name: 'Mike',
            //     bus: 'yes',
            //     car: 'no',
            //     php: 'yes',
            //     cpp: 'no'
            // }, {
            //     name: 'Kobe',
            //     bus: 'no',
            //     car: 'no',
            //     php: 'no',
            //     cpp: 'no'
            // }, {
            //     name: 'James',
            //     bus: 'yes',
            //     car: 'yes',
            //     php: 'yes',
            //     cpp: 'no'
            // }],
            width: '50px'
        };
    }
};
</script>

<style lang="less">
.hello-ex-table {
    width: 100%;
    padding: 2em;
    .ex-table {
        width: 100%;
        height: 500px;
    }
}
</style>
