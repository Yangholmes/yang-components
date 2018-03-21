<template lang="html">
    <tfoot class="ex-table-footer">

    </tfoot>
</template>

<script>
export default {
    data() {
        return {

        };
    }
};
</script>

<style lang="less">
tfoot.ex-table-footer {
    tr {
        td {
            border-right: 1px solid #e9eaec;
            border-bottom: 1px solid #e9eaec;
            &:last-child {
                border-right: none;
                border-bottom: none;
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
            border-bottom: none;
        }
    }
}
</style>
