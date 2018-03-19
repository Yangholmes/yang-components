<template lang="html">
    <ExTable :columns="columns"></ExTable>
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
                title: '姓名',
                key: 'name',
                children: []
            }, {
                title: 'Mark核实',
                key: 'markVerify',
                children: [{
                    title: '红绿灯',
                    key: 'verifyRgb',
                    children: [{
                        title: 'V1',
                        key: 'verifyRgbV1',
                        children: []
                    }, {
                        title: 'V2',
                        key: 'verifyRgbV2',
                        children: []
                    }]
                }, {
                    title: '警示牌',
                    key: 'verifyAlert',
                    children: [{
                        title: 'V1',
                        key: 'verifyAlertV1',
                        children: []
                    }, {
                        title: 'V2',
                        key: 'verifyAlertV2',
                        children: []
                    }]
                }]
            }, {
                title: 'Mark制作',
                key: 'markMake',
                children: [{
                    title: '红绿灯',
                    key: 'makeRgb',
                    children: [{
                        title: 'V1',
                        key: 'makeRgbV1',
                        children: []
                    }, {
                        title: 'V2',
                        key: 'makeRgbV2',
                        children: []
                    }]
                }, {
                    title: '警示牌',
                    key: 'makeAlert',
                    children: [{
                        title: 'V1',
                        key: 'makeAlertV1',
                        children: []
                    }, {
                        title: 'V2',
                        key: 'makeAlertV2',
                        children: []
                    }]
                }]
            }]
        };
    }
};
</script>

<style lang="less">
</style>
