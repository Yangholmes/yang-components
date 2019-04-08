/**
 * @file
 * @author Yangholmes
 */

const routes = [{
    path: '/',
    component: _ => import('@/components/HelloTable')
}, {
    path: '/table',
    name: 'HelloTable',
    component: _ => import('@/components/HelloTable')
}, {
    path: '/tag',
    name: 'HelloTag',
    component: _ => import('@/components/HelloTag')
}, {
    path: '/extend',
    name: 'HelloExtend',
    component: _ => import('@/components/HelloExtend')
}, {
    path: '/HOC',
    name: 'HOC',
    component: _ => import('@/components/HOC/Index')
}, {
    path: '/Tutorial',
    name: 'Tutorial',
    component: _ => import('@/components/HelloTutorial')
}, {
    path: '*',
    component: {
        render(h) {
            return <p>404</p>;
        }
    }
}];

export default routes;