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
            <article>
                <Lesson :tab="0" :tip="'Lesson 标签甚至可以不是第一级标签'">
                    <h2>将进酒</h2>
                </Lesson>
                    <quote>唐代：李白</quote>
                    <p>君不见，黄河之水天上来，奔流到海不复回。</p>
                    <p>君不见，高堂明镜悲白发，朝如青丝暮成雪。</p>
                    <p>人生得意须尽欢，莫使金樽空对月。</p>
                    <p>天生我材必有用，千金散尽还复来。</p>
                    <p>烹羊宰牛且为乐，会须一饮三百杯。</p>
                    <p>岑夫子，丹丘生，将进酒，杯莫停。</p>
                    <p>与君歌一曲，请君为我倾耳听。(倾耳听 一作：侧耳听)</p>
                    <p>钟鼓馔玉不足贵，但愿长醉不复醒。(不足贵 一作：何足贵；不复醒 一作：不愿醒/不用醒)</p>
                    <p>古来圣贤皆寂寞，惟有饮者留其名。(古来 一作：自古；惟 通：唯)</p>
                    <p>陈王昔时宴平乐，斗酒十千恣欢谑。</p>
                    <p>主人何为言少钱，径须沽取对君酌。</p>
                    <p>五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。</p>
            </article>
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
