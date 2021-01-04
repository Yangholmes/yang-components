<template>
    <li class="bullet-chat-bullet"
        :style="_bullet.style">
        {{_bullet.context}}
    </li>
</template>

<script>
export default {
    name: 'bullet',
    props: {
        bullet: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    computed: {
        _bullet() {
            const style = Object.keys(this.bullet.style).map(k => `${k}: ${this.bullet.style[k]};`).join('');
            return ({
                ...this.bullet,
                style
            });
        }
    },
    data() {
        return {
            boundary: {}
        };
    },
    mounted() {
        this.boundary = this.$el.getBoundingClientRect();
        this.feedback();
    },
    methods: {
        feedback() {
            this.$emit('onFeedback', {
                id: this._bullet.id,
                width: this.boundary.width,
                height: this.boundary.height
            });
        }
    }
};
</script>

<style lang="less">
.bullet-chat-bullet {
    margin: 0;
    padding: 0;
    list-style: none;
    display: block;
    white-space: nowrap;
    position: absolute;
}
</style>
