/**
 * Created by Administrator on 2016/9/18.
 */

var path = require('path'),
    fs = require('fs'),
    mime = require('./mime').types

function route(handle, pathname, req, res) {
    if(typeof handle[pathname] === 'function') {
        handle[pathname](req, res)
    } else {
        var realPath = "public" + pathname;
        var ext = path.extname(realPath);

        ext = ext ? ext.slice(1) : 'unknown';
        var contentType = mime[ext] || "text/plain";

        fs.exists(realPath, function (exists) {
            if (!exists) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write(pathname + " was not found on this server.");
                res.end();
            } else {
                fs.readFile(realPath, "binary", function (err, file) {
                    if (err) {
                        res.writeHead(500, {
                            'Content-Type': 'text/plain'
                        });
                        res.end(err);
                    } else {
                        res.writeHead(200, {
                            'Content-Type': contentType
                        });
                        res.write(file, "binary");
                        res.end();
                    }
                });
            }
        });
    }
}

exports.route = route