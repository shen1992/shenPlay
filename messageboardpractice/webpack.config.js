/**
 * Created by Administrator on 2016/4/6.
 */
module.exports = {
    entry: './public/src/js/Component.js',
    output: {
        filename: 'bundle.js',
        path: 'public/src/js'
    },
    module: {
        loaders: [{
            test: /\.coffee$/,
            loader: 'coffee-loader'
        }, {
            test: /\.css$/,
            loader: "css-loader"
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015','react']
            }
        }]
    }
};