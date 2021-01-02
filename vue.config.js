/**
 * @file 编译配置
 * @author Yangholmes
 */

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir);
}

module.exports = {
    css: {
        loaderOptions: {
            less: {}
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
};
