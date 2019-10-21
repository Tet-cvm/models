module.exports = {
    pages: {
        model: {
            // page 的入口
            entry: 'src/views/model/main.ts',
            // 模板来源
            template: 'public/model.html',
            // 在 dist/index.html 的输出
            filename: 'model.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: 'model Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'model']
        },
        game: {
            // page 的入口
            entry: 'src/views/game/main.ts',
            // 模板来源
            template: 'public/game.html',
            // 在 dist/index.html 的输出
            filename: 'game.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: 'game Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'game']
        },
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? './'  //生产环境路径
    : './', //测试环境
    outputDir: process.env.VUE_APP_TITLE == 'production' ? 'dist' : 'pre', //生产环境构建文件的目录
    // assetsDir: 'vue-static/', //放置生成的静态资源 (js、css、img、fonts) 目录。
    // indexPath: 'index.html',  //打包文件名称

    productionSourceMap: false, //是否需要.map文件
    integrity: true,  //部署在cdn上设为true时具备安全性
    lintOnSave: process.env.NODE_ENV !== 'production',

    //webpack配置
    chainWebpack: config => {
        // 移除 preload 插件
        // config.plugins.delete('preload')
        // 移除 prefetch 插件
        // config.plugins.delete('prefetch')
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => Object.assign(options, { limit: 1 }))
    },
    // configureWebpack: {
    //     performance: {  //关闭webpack打包文件过大提示
    //         hints: false
    //     },
    //     plugins: [
    //         new HtmlWebpackPlugin({
    //             template: 'public/index.html'
    //         })
    //     ],
    // },
    css: {
        extract: true, //是否使用css分离插件ExtractTextPlugin
        sourceMap: false, //关闭css source map
        loaderOptions: {}, //css预设器配置
        requireModuleExtension: false, //启用 CSS modules for all css / pre-processor files.
    },
    parallel: require('os').cpus().length > 1,
    //PWA 插件相关配置
    pwa: {},
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hot: true,
        hotOnly: true,
        open: false,
        proxy: null, //设置代理
        before: app=> {}
    }
}