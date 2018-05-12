import Vue from 'vue';
import Router from 'vue-router';
import HelloTable from '@/components/HelloTable';
import HelloTag from '@/components/HelloTag';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/table',
        name: 'HelloTable',
        component: HelloTable
    }, {
        path: '/tag',
        name: 'HelloTag',
        component: HelloTag
    }]
});
