export default function (wComponent) {
    return {
        template: `<wrapped v-on="$listeners" v-bind="$attrs"></wrapped>`,
        components: {
            wrapped: wComponent
        },
        mounted() {
            console.log(this);
            console.log(`${wComponent.name} have already mounted`);
        }
    };
}