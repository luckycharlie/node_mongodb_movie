/**
 * Created by Administrator on 2017/4/12 0012.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //页面入口文件配置
    entry: {
        index : __dirname+'/src/js/movie/index.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname+'/src/dist/js',
        filename: 'build.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'babel-loader?harmony',query: {presets: ['es2015']},exclude: /(node_modules|bower_components)/,},
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};