
export default [
    {
        path: '/',
        redirect: '/demo'
    },
    {
        name: 'demo',
        path: '/demo',
        // 官方的懒加载方案，需要在webpack.config.js中配置@babel/plugin-syntax-dynamic-import这个插件，否则babel不支持以下语法会报错。
        // 下面的注释语法是打包生成的js的文件名，如果你想某几个组件打包到同一个文件，那么它们的注释语法的webpackChunkName的名字相同即可
        component: () => import(/* webpackChunkName: "demo" */'@/views/demo/index')
    },
    {
        name: 'demo1',
        path: '/demo1',
        component: () => import(/* webpackChunkName: "demo" */'@/views/demo/demo1')
    }
]