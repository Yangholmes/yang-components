<template lang="html">
    <div class="ex-tag" :style="`background-color: ${bgColor}; border-style: ${border}`">
        <span class="tag"
            v-show="!editing"
            @dblclick="onEditTag">{{value}}</span>
        <span class="tag-shadow" ref="exTagShadow">{{value}}</span>
        <input class="tag-editor" type="text"
            ref="exTagEditor"
            v-show="editing"
            :style="`width: ${tagWidth}`"
            :value="value"
            @input="onTagChange($event)"
            @focus="onTagFocus($event)"
            @blur="onTagBlur($event)"
            @keydown="onTagKeydown($event)">
        <span class="kill-myself"
            v-show="closable"
            @click="onSuicide"></span>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'modified'
    },
    props: {
        value: String || Number,
        editable: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: false
        },
        bgColor: {
            type: String,
            default: '#fff'
        },
        border: {
            type: String,
            default: 'dashed'
        }
    },
    mounted() {
        // console.log(this.editable);
    },
    data() {
        return {
            tagWidth: '5em',
            editing: false
        };
    },
    methods: {
        getTagWidth() {
            let width = this.$refs.exTagShadow.clientWidth;
            this.tagWidth = `calc( ${width}px + 1em + 2px )`;
        },
        onEditTag() {
            if (!this.editable) {
                return false;
            }
            this.editing = true;
            this.$nextTick(() => {
                this.$refs.exTagEditor.focus({preventScroll: false});
            });
        },
        onTagChange() {
            this.$emit('change', [event, this.value]);
        },
        onTagFocus() {
            this.getTagWidth();
            this.$emit('focus', [event, this.value]);
        },
        onTagBlur(event) {
            this.modifyVal(event);
            this.$emit('blur', [event, this.value]);
        },
        onTagKeydown(event) {
            if (event.keyCode === 13) {
                this.modifyVal(event);
            }
            this.$emit('keydown', [event, this.value]);
        },
        onSuicide() {
            this.$emit('suicide', this.value);
        },
        modifyVal(e) {
            let value = e.target && e.target.value;
            value = value.trim();
            this.$emit('modified', value);
            this.editing = false;
        }
    }
};
</script>

<style lang="less">
.ex-tag {
    font-size: 1em;
    width: fit-content;
    min-height: 1.5em;
    height: auto;
    display: inline-flex;
    align-items: center;
    border: 1px dashed #aaa;
    border-radius: 5px;
    padding: .1em .5em;
    .tag {
        min-width: .5em;
        min-height: 1em;
        cursor: default;
    }
    .tag-shadow {
        display: inline-block;
        position: absolute;
        top: -100%;
        right: -100%;
        z-index: -999;
    }
    .tag-editor {
        width: 5em;
        padding: 0px 0.5em;
        font-family: inherit;
        font-size: 1em;
        border: .5px dotted  #ddd;
        background-color: #fff9;
        outline: none;
        outline-offset: 0;
    }
    .kill-myself {
        user-select: none;
        position: relative;
        display: inline-block;
        width: 1em;
        height: 1em;
        font-size: .5em;
        margin-left: .5em;
        cursor: pointer;
        &::before,
        &::after {
            content: '';
            position: absolute;
            top: calc( .5em - .05em );
            left: 0;
            background: #000;
            display: inline-block;
            width: 1em;
            height: .1em;
        }
        &::before {
            transform: rotate(45deg);
        }
        &::after {
            transform: rotate(-45deg);
        }
        &:hover,
        &:active {
            &::before,
            &::after {
                background: #777;
            }
        }
    }
}
</style>
