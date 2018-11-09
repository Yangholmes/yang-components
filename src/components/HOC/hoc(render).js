export default function (wComponent) {
    return {
        // template: `<wrapped v-on="$listeners" v-bind="$attrs"></wrapped>`,
        // components: {
        //     wrapped: wComponent
        // },
        mounted() {
            console.log(this);
            console.log(wComponent);
            console.log(`${wComponent.name} have already mounted`);
        },
        props: wComponent.props,
        render(h) {
            // slot的上下文应该是调用HOC的上下文而非this
            // 另一种解法是，使用`this.$parent.$createElement()`创建节点，而非使用本render提供的`h()`
            let slots = Object.keys(this.$slots).reduce((acc, slot) => acc.concat(this.$slots[slot]), []).map(vnode => {
                vnode.context = this._self;
                return vnode;
            });
            console.log(this, this.$slots);
            return h(wComponent, {
                on: this.$listeners,
                attrs: this.$attrs,
                props: this.$props,
                scopedSlots: this.$scopedSlots
            }, slots);
        }
    };
}