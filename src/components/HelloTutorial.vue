<template>
    <div id="hello-tutorial">
        <p>Hello Tutorial!</p>
        <Tutorial>
            <h1>Welcome</h1>
            <Lesson :tab="4" :tip="'welcome you'">Start!</Lesson>
            <Lesson :tab="2" :tip="'This is ExTag!'">
                <ExTag v-for="(tag, index) in tags" :key="index" v-model="tag.title" border="solid" editable closable></ExTag>
            </Lesson>
            <Lesson :tab="1000" :tip="'tab 其实时可以指定未任意数字，数字小的出现在前面，数字大的出现在后面'">
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
            tags: [
                {title: '标签0'},
                {title: '标签1'},
                {title: '标签2'},
                {title: '标签3'}
            ]
        };
    }
};
</script>

<style>
#hello-tutorial {
    width: 70%;
}
</style>
