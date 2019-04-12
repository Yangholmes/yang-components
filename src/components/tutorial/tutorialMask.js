/**
 * @file tutorial 遮罩层
 * @author Yangholmes
 */

/**
 * 为什么遮罩层要以独立的 Vue 实例插入文档中？
 * 因为遮罩层需要 cover 整个 body，如果遮罩层定义在某个自定义组件中，则有可能因为上下文 position 关系无法覆盖整个 body
 */

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
