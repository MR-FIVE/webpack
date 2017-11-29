#webpack
##打包
##html-webpack-plugin的基本了解
>首先区分pligins跟loader的区别，plugins是用来拓展webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
>Loaders和Plugins常常被弄混，但是他们其实是完全不同的东西：Loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个;插件并不直接操作单个文件，它直接对整个构建过程其作用。
>webpack有很多内置插件，同时也有很多第三方插件，可以让我们完成更加丰富的功能。
>1、使用插件的方法
>要使用某个插件，需要通过npm安装它，然后在webpack.config.js中的plugins关键字部分添加该插件的一个实例（plugins是一个数组，new一个插件即可）。...
