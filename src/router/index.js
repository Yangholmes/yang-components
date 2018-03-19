import Vue from 'vue';
import Router from 'vue-router';
import HelloTable from '@/components/HelloTable';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloTable',
        component: HelloTable
    }]
});
