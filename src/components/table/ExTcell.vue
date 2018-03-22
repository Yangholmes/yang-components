<template lang="html">
    <span class="ex-table-cell" :style="'width: ' + (column.width || `calc( ${column.col} * ${cellWidth} )`)">
        <span v-if="type === 'normal'">{{row[theKey]}}</span>
        <Cell
            v-if="type === 'render'"
            :row="row"
            :column="column"
            :index="index"
            :render="column.render"></Cell>
    </span>
</template>

<script>
import Cell from './renderer';

export default {
    components: {
        Cell
    },
    props: {
        row: Object,
        theKey: String,
        index: Number,
        column: Object,
        cellWidth: String
    },
    computed: {
        type() {
            if (this.column.render && this.column.render.constructor === Function) {
                return 'render';
            }
            else {
                return 'normal';
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
.ex-table-cell {
    display: inline-block;
}
</style>
