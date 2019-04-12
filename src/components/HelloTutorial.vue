<template>
    <div id="hello-tutorial">
        <p>Hello Tutorial!</p>
        <Tutorial v-model="tutorial">
            <h1>Welcome</h1>
            <p>是否显示教程？</p>
            <button @click="onTutorialToggle">{{tutorial ? '不需要指导' : '指导我一下'}}</button>
            <Lesson :tab="4" :tip="'welcome you'">Start!</Lesson>
            <Lesson :tab="1000" :tip="'tab 其实时可以指定未任意数字，数字小的出现在前面，数字大的出现在后面'">
                <ExTag v-for="(tag, index) in tags" :key="index" v-model="tag.title" border="solid" editable closable></ExTag>
            </Lesson>
            <article>
                <Lesson :tab="0" :tip="'Lesson 标签甚至可以不是第一级标签'" style="width: 6em;">
                    <h2>静夜思</h2>
                </Lesson>
                <Lesson :tab="1" :tip="'浮动元素也可以使用'" style="display: inline-block; width: auto; position: absolute; right: 0;">
                    <p>唐代：李白</p>
                </Lesson>
                <p>窗前明月光</p>
                <p>疑似地上霜</p>
                <p>举头望明月</p>
                <p>低头思故乡</p>
            </article>
            <Lesson :tab="2" :tip="'This is ExTag!'" style="width: 40em;">
                <ExTag v-for="(tag, index) in tags" :key="index" v-model="tag.title" border="solid" editable closable></ExTag>
            </Lesson>
        </Tutorial>
    </div>
</template>

<script>
import {Tutorial, Lesson} from './tutorial/index';

import ExTag from '@/components/ex-tag';

export default {
    components: {
        Tutorial,
        Lesson,
        ExTag
    },
    data() {
        return {
            tutorial: true,
            tags: [
                {title: '标签0'},
                {title: '标签1'},
                {title: '标签2'},
                {title: '标签3'}
            ]
        };
    },
    methods: {
        onTutorialToggle() {
            this.tutorial = !this.tutorial;
        }
    }
};
</script>

<style>
#hello-tutorial {
    width: 100%;
}
</style>
