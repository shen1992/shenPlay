/**
 * Created by Administrator on 2016/9/18.
 */
var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./requestHandlers')

var handle = {}

handle['/'] = requestHandlers.start
handle['/list'] = requestHandlers.list
handle['/save'] = requestHandlers.save

server.start(router.route, handle)