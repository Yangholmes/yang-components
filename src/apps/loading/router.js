import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
        path: '/meizu',
        component: () => import('./meizu/Meizu.vue')
    }, {
        path: '/windows10',
        component: () => import('./Windows10/Windows10.vue')
    }]
});
