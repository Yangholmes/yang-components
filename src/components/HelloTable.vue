<template lang="html">
    <div class="hello-ex-table">
        <ExTable class="ex-table" :columns="columns" :data="data"></ExTable>
    </div>
</template>

<script>
import ExTable from '@/components/table';

export default {
    components: {
        ExTable
    },
    data() {
        return {
            columns: [{
                title: 'Name',
                key: 'name',
                width: '120px'
            }, {
                title: 'Skills',
                child: [{
                    title: 'Drive',
                    child: [{
                        title: 'Bus',
                        key: 'bus'
                    }, {
                        title: 'Car',
                        key: 'car'
                    }]
                }, {
                    title: 'Code',
                    child: [{
                        title: 'php',
                        key: 'php'
                    }, {
                        title: 'C++',
                        key: 'cpp'
                    }]
                }]
            }],
            data: [{
                name: 'Mike',
                bus: 'yes',
                car: 'no',
                php: 'yes',
                cpp: 'no'
            }, {
                name: 'Kobe',
                bus: 'no',
                car: 'no',
                php: 'no',
                cpp: 'no'
            }, {
                name: 'James',
                bus: 'yes',
                car: 'yes',
                php: 'yes',
                cpp: 'no'
            }]
        };
    }
};
</script>

<style lang="less">
.hello-ex-table {
    padding: 2em;
}
</style>
