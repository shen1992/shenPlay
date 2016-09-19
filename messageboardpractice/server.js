/**
 * Created by Administrator on 2016/9/18.
 */
var http = require('http'),
    url = require('url')

function start(route, handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname

        route(handle, pathname, req, res)
    }

    http.createServer(onRequest).listen(8888)
    console.log('server is running')
}

exports.start = start