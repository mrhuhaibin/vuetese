const isProd = process.env.NODE_ENV === 'production'
const baseUrl = '/vue_test/'
module.exports = {
    // 选项...
    //部署应用包时的基本 URL
    publicPath: isProd ? baseUrl : '/',

    //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',

    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: '',

    //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',

    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
    filenameHashing: 'true',

    //在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象
    pages: {
		index: {
			// page 的入口
			entry: 'src/main.js',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'Index Page',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
		// 当使用只有入口的字符串格式时，
		// 模板会被推导为 `public/subpage.html`
		// 并且如果找不到的话，就回退到 `public/index.html`。
		// 输出文件名会被推导为 `subpage.html`。
		subpage: 'src/main.js'
	},

    //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: true,

    devServer: {
		port: 8080, // 端口号
		host: 'localhost',
		https: false, // https:{type:Boolean}
		open: false, //配置自动启动浏览器
		// proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
	}
}
