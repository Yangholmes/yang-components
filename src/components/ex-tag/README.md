# ExTable
# 扩展的`<tag>`标签
##### 仅支持Vue.js

----
Usage:

```html
<template lang="html">
    <div class="hello-ex-tag">
        <ExTag  v-for="(tag, index) in tags" :key="index" v-model="tag.title" editable closable></ExTag>
    </div>
</template>

<script>
import ExTag from '@/components/ex-tag';

export default {
    components: {
        ExTag
    },
    data() {
        return {
            tags: [
                {title: '标签0'},
                {title: '标签1'},
                {title: '标签2'},
                {title: '标签3'},
                {title: '标签4'},
                {title: '标签5'},
                {title: '标签6'},
                {title: '标签7'}
            ]
        };
    }
};
</script>

<style lang="less">
.hello-tag {
    width: 100%;
    height: 100%;
}
</style>
```

result:
