<template lang="html">
    <div class="hello-bullet-chat">
        <BulletChat class="bullet-chat-board"
            :bullets=bullets>
        </BulletChat>
        <ul class="bc-list">
            <li v-for="bc in bcList" :key="bc.id">
                {{bc.context}}
            </li>
        </ul>
        <form class="new-bc">
            <input type="text" v-model="newBc">
            <button @click="onSendBulletChat">好</button>
        </form>
    </div>
</template>

<script>
import BulletChat from './bullet-chat';

export default {
    name: 'hello-bullet-chat',
    components: {BulletChat},
    data() {
        return {
            newBc: '',
            bcList: [],
            bullets: []
        };
    },
    methods: {
        onSendBulletChat() {
            this.newBc = this.newBc.trim();
            if (!this.newBc) {
                return false;
            }
            const newBc = {
                id: new Date().getTime(),
                context: this.newBc,
                style: {
                    top: 213123230,
                    color: '#0F0',
                    fontSize: 300
                }
            };
            this.bcList.push(newBc);
            this.bullets = [newBc];
            this.newBc = '';
        }
    }
};
</script>

<style lang="less">
.hello-bullet-chat {
    width: 30em;
    height: 30em;
    margin: auto;
    display: grid;
    grid-template-areas:
        "a b"
        "a c";
    grid-template-rows: auto 2em;
    grid-template-columns: 2fr 1fr;
    .bullet-chat-board {
        grid-area: a;
        border: 1px solid #000;
        border-radius: 3px;
    }
    .bc-list {
        grid-area: b;
    }
    .new-bc {
        grid-area: c;
        display: flex;
        align-items: normal;
        justify-content: space-between;
    }
}
</style>
