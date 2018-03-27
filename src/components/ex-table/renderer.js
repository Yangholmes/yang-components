/**
 * Renderer, base on JSX
 * refs[https://github.com/iview/iview/blob/2.0/src/components/table/expand.js]
 *
 * @file
 * @author iView
 */
export default {
    name: 'exTableRenderer',
    functional: true,
    props: {
        row: Object,
        render: Function,
        index: Number,
        column: {
            type: Object,
            default: {}
        }
    },
    render: (h, ctx) => {
        const params = {
            row: ctx.props.row,
            index: ctx.props.index
        };
        if (ctx.props.column) {
            params.column = ctx.props.column;
        }
        return ctx.props.render(h, params);
    }
};
