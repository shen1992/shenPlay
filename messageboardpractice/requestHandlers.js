/**
 * Created by Administrator on 2016/9/18.
 */
var util = require('util'),
    url = require('url'),
    querystring = require('querystring'),
    db = require('./db')

function start(req, res) {
    console.log('server is start')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<div>hello world</div>')
    res.end()
}

//获取数据，在请求体中，通过data,end来获取
function save(req, res) {
    var str = ''

    req.on('data', function (chunk) {
        str += decodeURIComponent(chunk)
    })
    req.on('end', function () {
        var params = querystring.parse(str)
        
        db.save(params, function (result) {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(util.format('%j', result))
            res.end()
        })
    })
}

//获取url上query的数据并且输出
function list(req, res) {
    var params = url.parse(req.url, true).query

    db.list(params.page, function (result) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(util.format('%j', result))
        res.end()
    })
}

exports.start = start
exports.save = save
exports.list = list