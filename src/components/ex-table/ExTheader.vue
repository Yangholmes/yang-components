<template lang="html">
    <thead class="ex-table-header">
        <tr v-for="(value, key) in header" :key="key">
            <th v-for="(val, ke) in value" :key="ke" :rowspan="val.row" :colspan="val.col">
                <span :style="'width: ' + (val.width || `calc( ${val.col} * ${cellWidth} )`)">{{val.title}}</span>
            </th>
        </tr>
    </thead>
</template>

<script>
export default {
    props: {
        header: {
            type: Array,
            default() {
                return [];
            }
        },
        cellWidth: String
    },
    data() {
        return {
        };
    }
};
</script>

<style lang="less">
@borderColor: #e9eaec;
thead.ex-table-header {
    font-size: 1em;
    font-weight: 600;
    tr {
        th {
            font-weight: inherit;
            background-color: #f8f8f9;
            border-right: 1px solid @borderColor;
            border-bottom: 1px solid @borderColor;
            &:last-child {
                border-right: none;
            }
            span {
                display: inline-block;
            }
        }
        &:last-child {
            border-bottom: none;
        }
    }
}
</style>
