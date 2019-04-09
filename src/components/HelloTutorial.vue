<template>
    <div id="hello-tutorial">
        <p>Hello Tutorial!</p>
        <Tutorial>
            <h1>Welcome</h1>
            <Lesson :tab="4">Start!</Lesson>
            <Lesson :tab="2">
                <ExTag v-for="(tag, index) in tags" :key="index" v-model="tag.title" border="solid" editable closable></ExTag>
            </Lesson>
            <div>
                <ExTag v-for="(tag, index) in tags" :key="index" v-model="tag.title" border="solid" editable closable></ExTag>
            </div>
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
