// 引入webpack
const webpack = require('webpack');
// 引入配置合并插件
const {merge} = require('webpack-merge');
// 引入公用配置
const common = require('./webpack.common.js')


module.exports = merge(common, {
    // 指定模式，这儿有none production development三个参数可选
    // 具体作用请查阅官方文档
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    {
                        loader: 'style-loader' // 开发环境还是使用style-loader，不然无法及时响应样式变化
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'       
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // 辅助HotModuleReplacementPlugin插件，给模块增加标识
        // 生产环境可以用new webpack.HashedModuleIdsPlugin()
        new webpack.NamedModulesPlugin(),
        // 启用热更新必须的
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        // 默认情况不设置这个只能通过localhost:9000来访问，现在可以通过本机局域网ip来访问，
        // 比如192.168.12.21:9000，手机在这个局网内也可以访问
        host: '0.0.0.0',
        hot: true,
        port: 9200,
        contentBase: './dist',
        clientLogLevel: "error", // 关闭在浏览器控制台显示消息的功能，可能的值有 none, error, warning 或者 info（默认值）。这里我设置为只显示错误消息
        overlay: {
          errors: true,
          warnings: true
        },
        quiet: true
      }
})
