import Vue from 'vue';
import Router from 'vue-router';
import HelloTable from '@/components/HelloTable';
import HelloTag from '@/components/HelloTag';
import HelloExtend from '@/components/HelloExtend';
import HOC from '@/components/HOC';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloTable',
        component: HelloTable
    }, {
        path: '/table',
        name: 'HelloTable',
        component: HelloTable
    }, {
        path: '/tag',
        name: 'HelloTag',
        component: HelloTag
    }, {
        path: '/extend',
        name: 'HelloExtend',
        component: HelloExtend
    }, {
        path: '/HOC',
        name: 'HOC',
        component: HOC
    }]
});
