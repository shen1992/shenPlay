/**
 * Created by Administrator on 2016/2/8 0008.
 */

var path = require('path');

module.exports = {

    entry : './src/entry.js',
    output : {
        path : path.join(__dirname,'out'),
        filename : 'bundle.js',
        publicPath : './out/'
    },

    module: {
        loaders: [

            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}

        ]
    }

};