<template lang="html">
    <div class="ex-table" :id="id">
        <div ref="headerFixed" class="ex-table-header-fixed" :id="id + '-header'">
            <table>
                <ExTheader :header="header"></ExTheader>
            </table>
        </div>
        <div class="ex-table-col-fixed" :id="id + '-col-fixed'">
                <div class="ex-table-header-fixed" :id="id + '-header'">
                    <table>
                        <ExTheader :header="fixedHeader" :style="`line-height: calc( ${headerHeight} - 3px )`"></ExTheader>
                    </table>
                </div>
                <div ref="colFixed" class="ex-table-body" :id="id + '-col-fixed'" :style="`height: calc( 100% - ${headerHeight} ); overflow: hidden;`">
                    <table>
                        <ExTbody ref="colFixed" :data="data" :keys="fixedKeys"></ExTbody>
                    </table>
                </div>
        </div>
        <div ref="body" class="ex-table-body" :id="id + '-body'" :style="`height: calc( 100% - ${headerHeight} )`" @scroll="onBodyScoll">
            <table>
                <ExTbody :data="data" :keys="keys"></ExTbody>
                <ExTfooter></ExTfooter>
            </table>
        </div>
    </div>
</template>

<script>
import ExTheader from './ExTheader.vue';
import ExTbody from './ExTbody.vue';
import ExTfooter from './ExTfooter.vue';

export default {
    components: {
        ExTheader,
        ExTbody,
        ExTfooter
    },
    props: {
        columns: {
            type: Array,
            default() {
                return [];
            }
        },
        data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            id: 'ex-table-' + Math.ceil(Math.random() * 100000),
            headerHeight: 0,
            // 表头
            header: [],
            // 当前深度
            deep: 0,
            // 列斑马线
            colStripe: true,
            // keys
            keys: [],
            // 固定列
            fixedHeader: [[]],
            fixedKeys: [],
            // 总行数
            rows: 0
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let columns = this.planTree(this.columns, 0);
            let header = this.genHeader(columns);
            this.header = header.header;
            this.keys = header.keys;
            this.align();
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
         * @param  {Array}  [arr=[]]    [description]
         * @param  {Array}  [header=[]] [description]
         * @param  {Array}  [keys=[]]   [description]
         * @return {[type]}             [description]
         */
        genHeader(arr = [], header = [], keys = []) {
            for (let i = 0; i < arr.length; i++) {
                !header[this.deep] && header.push([]);
                header[this.deep].push(Object.assign({}, arr[i], {
                    row: arr[i].child.length ? 1 : this.rows - arr[i].row,
                    child: null
                }));
                if (!arr[i].child || !arr[i].child.length) {
                    arr[i].colStripe = this.colStripe;
                    keys.push(arr[i]); // 叶节点的 key, 用于数据渲染
                    if (arr[i].fixed) {
                        this.fixedHeader[0].push(arr[i]);
                        this.fixedKeys.push(arr[i]);
                    }
                }
                else {
                    this.deep += 1; // 往下一层
                    this.deep === 2 && (this.colStripe = !this.colStripe);
                    this.genHeader(arr[i].child, header, keys);
                    this.deep -= 1; // 回到上一层
                }
            }
            return {
                header,
                keys
            };
        },
        align() {
            this.$nextTick(() => {
                let header = this.$refs['headerFixed'];
                this.headerHeight = window.getComputedStyle(header).height;
            });
        },
        onBodyScoll(event) {
            this.$refs['headerFixed'].scrollLeft = event.target.scrollLeft;
            this.$refs['colFixed'].scrollTop = event.target.scrollTop;
        }
    }
};
</script>

<style lang="less">
.ex-table {
    position: relative;
    overflow: hidden;
    min-width: 100%;
    height: 100%;
    color: #495060;
    font-size: 16px;
    background-color: #fff;
    font-family: Microsoft YaHei, Arial, sans-serif;
    border: 1px solid #e9eaec;
    .ex-table-header-fixed {
        overflow: hidden;
    }
    .ex-table-col-fixed {
        height: calc( 100% - 8px ); // 此处8px是滚动条高度，使用时按照实际情况修改
        overflow: hidden;
        box-shadow: 2px 0 6px -2px rgba(0, 0, 0, .2);
        position: absolute;
        top: 0;
        left: 0;
    }
    .ex-table-body {
        height: 100%;
        overflow: auto;
    }
    table {
        font-size: .75em;
        text-align: center;
        border-collapse: collapse;
        white-space: normal;
        word-break: break-all;
        background-color: #fff;
    }
}
</style>
