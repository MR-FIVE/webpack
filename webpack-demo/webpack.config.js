const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-boundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:path.resolve(__dirname,"node_modules"),
                include:path.resolve(__dirname,"src")
            }
        ]
    },
    plugins: [new htmlWebpackPlugin({
            filename: 'index.html', //文件名
            template: 'index.html', //模板文件
            inject: 'body', //script外链方式
            title: 'this is index.html', //title
        })]
}
