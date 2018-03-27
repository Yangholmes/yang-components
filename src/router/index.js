import Vue from 'vue';
import Router from 'vue-router';
import HelloTag from '@/components/HelloTag';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloTag',
        component: HelloTag
    }]
});
