const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-boundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:path.resolve(__dirname,"node_modules"),
                include:path.resolve(__dirname,"src")
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.tpl$/,
                loader:'ejs-loader'
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?importLoaders=1!postcss-loader'//loaders数组格式
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!postcss-loader!sass-loader'
            },
            // {
            //     test:/\.(png|jpg|gif|svg)$/i,
            //     loader:'url-loader',
            //     query:{
            //         limit:40000,
            //         name:'assets/[name]-[hash:5].[ext]'
            //     }
            // }
            {
                test:/\.(png|jpe?g|gif|svg)$/i,
                loaders:[
                    'url-loader?limit=8192&name=assets/[name]-[hash:5].[ext]',
                    'image-webpack-loader'
                ]
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
