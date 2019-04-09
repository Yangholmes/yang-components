import Vue from 'vue';
import './tutorialMask.less';

export default function (hidden) {
    let mask =  new Vue({
        render(h) {
            return <div class={(this.hidden ? 'hidden' : 'show') + ' tutorial-mask'}></div>;
        },
        data() {
            return {
                hidden
            };
        },
        methods: {
            show() {
                this.hidden = false;
            },
            hide() {
                this.hidden = true;
            },
            destory() {
                this.$destroy();
                document.body.removeChild(this.$el);
            }
        }
    });

    let oldMasks = document.querySelectorAll('.tutorial-mask');
    oldMasks.forEach(e => document.body.removeChild(e));

    let maskInstance = mask.$mount();
    document.body.appendChild(maskInstance.$el);

    return maskInstance;
}
