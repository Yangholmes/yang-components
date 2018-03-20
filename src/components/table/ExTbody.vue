<template lang="html">
    <tbody class="ex-table-body">
        <tr v-for="(row, index) in data" :key="index">
            <td v-for="(val, k) in keys" :key="k"
                :class="{hover: (hKey === k) || (hIndex === index)}"
                @mouseover="onHover(1, index, k)"
                @mouseleave="onHover(0, index, k)">
                {{row[val.key]}}
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        keys: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    mounted() {

    },
    data() {
        return {
            hKey: '',
            hIndex: null
        };
    },
    methods: {
        onHover(type, index, key) {
            if (!type) {
                this.hKey = '';
                this.hIndex = null;
            }
            else {
                this.hIndex = index;
                this.hKey = key;
            }
        }
    }
};
</script>

<style lang="less">
tbody.ex-table-body {
    tr {
        td {
            border-right: 1px solid #e9eaec;
            border-bottom: 1px solid #e9eaec;
            &:last-child {
                border-right: none;
                border-bottom: none;
            }
            &.hover {
                background-color: #ebf7ff;
            }
        }
    }
}
</style>
