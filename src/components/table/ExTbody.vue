<template lang="html">
    <tbody class="ex-table-body">
        <tr v-for="(row, index) in data" :key="index">
            <td v-for="(val, k) in keys" :key="k"
                :class="{hover: (hKey === k) || (hIndex === index), odd: !val.colStripe}"
                @mouseover="onHover(1, index, k)"
                @mouseleave="onHover(0, index, k)">
                <!-- <span>{{val.colStripe}}</span> -->
                <ExTcell
                    :row="row"
                    :theKey="val.key"
                    :index="index"
                    :column="val"
                    :cellWidth="cellWidth"></ExTcell>
            </td>
        </tr>
    </tbody>
</template>

<script>
import ExTcell from './ExTcell.vue';

export default {
    components: {
        ExTcell
    },
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
        },
        cellWidth: String
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
            }
            &.odd {
                background-color: #fee;
            }
            &.hover {
                background-color: #ebf7ff;
            }
            transition: background-color .2s ease-in-out;
        }
        &:last-child {
            &, td {
                border-bottom: none;
            }
        }
    }
}
</style>
