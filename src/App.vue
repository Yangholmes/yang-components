<template>
    <div id="app">
        <header>
            <nav>
                <ul id="routes-list">
                    <li v-for="r in navs" :key="r.name">
                        <router-link :to="r.path">{{r.name}}</router-link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <router-view/>
        </main>
        <footer>
            <span>©Yangholmes</span>
        </footer>
    </div>
</template>

<script>
import routes from './router/routes';

export default {
    name: 'App',
    computed: {
        navs() {
            return this.routes.filter(e => e.name);
        }
    },
    data() {
        return {
            routes
        };
    }
};
</script>

<style lang="less">
#app {
    @headerHeight: 3.5em;
    @footerHeight: 3em;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
        width: 100%;
        height: @headerHeight;
        overflow: hidden;
        ul#routes-list {
            display: flex;
            justify-content: space-around;
            align-items: center;
            list-style: none;
            font-family: sans-serif;
            font-weight: bold;
            li {
                a {
                    text-decoration: none;
                }
            }
        }
    }
    main {
        width: 100%;
        min-height: calc( ~'100% - @{headerHeight} - @{footerHeight}' );
    }
    footer {
        width: 100%;
        height: @footerHeight;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
