const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com/'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'a.html',//文件名
            template:'index.html',//模板文件
            inject:false,//script外链方式
            title:'this is a.html',//title
            // chunks:['main','a'],//chunks main a
            excludeChunks:['b','c'],//chunks排除b，c
            minify:{//格式化
                removeComments: true, //移除HTML中的注释
                // collapseWhitespace: true //删除空白符与换行符
            }
        }),
        new htmlWebpackPlugin({
            filename:'b.html',
            template:'index.html',
            inject:false,
            title:'this is b.html',
            // chunks:['b'],
            excludeChunks:['a','c'],
            minify:{
                removeComments:true,
                // collapseWhitespace:true
            }
        }),
        new htmlWebpackPlugin({
            filename:'c.html',
            template:'index.html',
            inject:false,
            title:'this is c.html',
            // chunks:['c'],
            excludeChunks:['a','b'],
            minify:{
                removeComments:true,
                // collapseWhitespace:true
            }
        })
    ]
}
