/**
 * Express文件服务器
 * @file
 * @author Yangholmes
 */
const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');

app.use(express.static('../dist/'));
// app.use(history({
//     index: '../dist/',
//     verbose: true
// }));

let server = app.listen(80, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
