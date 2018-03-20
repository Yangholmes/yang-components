<template lang="html">
    <thead class="ex-table-header">
        <tr v-for="(value, key) in header" :key="key">
            <th v-for="(val, ke) in value" :key="ke" :rowspan="val.row" :colspan="val.col">
                <span :style="`width: ${val.width || '1.5em'}`">{{val.title}}</span>
            </th>
        </tr>
    </thead>
</template>

<script>
export default {
    props: {
        columns: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    mounted() {
        this.init();
    },
    data() {
        return {
            // 表头
            header: [],
            // 当前深度
            deep: 0,
            // 列斑马线
            colStripe: true,
            // keys
            keys: [],
            // 总行数
            rows: 0
        };
    },
    methods: {
        init() {
            this.genHeader(this.planTree(this.columns, 0));
            this.$emit('genKeys', this.keys);
            console.log(this.keys);
        },
        /**
         * 遍历树，计算每个节点的 rowspan 和 colspan，返回新树
         * @param  {[type]} tree child 数据
         * @param  {[type]} row  当前节点深度
         * @return {[type]}      返回新树
         */
        planTree(tree, row) {
            for (let i = 0; i < tree.length; i++) {
                tree[i].row = row;
                if (!tree[i].child || !tree[i].child.length) {
                    this.rows = (row + 1) > this.rows ? row + 1 : this.rows;
                    tree[i].col = 1;
                }
                else {
                    this.planTree(tree[i].child, row + 1);
                    tree[i].col = tree[i].child.reduce((a, c) => a + c.col, 0);
                }
            }
            return tree;
        },
        /**
         * 根据新树生成表头
         * @param  {[type]} arr [description]
         * @return {[type]}     [description]
         */
        genHeader(arr) {
            for (let i = 0; i < arr.length; i++) {
                !this.header[this.deep] && this.header.push([]);
                this.header[this.deep].push(Object.assign({}, arr[i], {
                    row: arr[i].child.length ? 1 : this.rows - arr[i].row,
                    child: null
                }));
                if (!arr[i].child || !arr[i].child.length) {
                    arr[i].colStripe = this.colStripe;
                    this.keys.push(arr[i]); // 叶节点的 key, 用于数据渲染
                }
                else {
                    this.deep += 1;
                    this.deep === 2 && (this.colStripe = !this.colStripe);
                    this.genHeader(arr[i].child);
                    this.deep -= 1;
                }
            }
        }
    }
};
</script>

<style lang="less">
thead.ex-table-header {
    font-size: 1em;
    font-weight: 600;
    th {
        background-color: #f8f8f9;
        border-right: 1px solid #e9eaec;
        border-bottom: 1px solid #e9eaec;
        &:last-child {
            border-right: none;
            border-bottom: none;
        }
        span {
            display: inline-block;
        }
    }
}
</style>
