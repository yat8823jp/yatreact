import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import autoprefixer from 'autoprefixer'

const src  = path.resolve( __dirname, 'src' )
const dist = path.resolve( __dirname, 'dist' )

export default {
	mode: 'development',
	entry: {
		"jsx": src + '/index.jsx',
		"main": src + '/scripts/main.js',
		"scss": src + '/styles/style.scss'
	},
	output: {
		filename: 'script/[name].js',
		path: dist,
		chunkFilename: '[id].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(jpg|png|gif)$/,
				loader: 'url-loader',
				query: {
					limit: 10240
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							// CSS内のurl()メソッドの取り込みを禁止する
							url: false,
							// ソースマップの利用有無
							sourceMap: true,
							// Sass+PostCSSの場合は2を指定
							importLoaders: 2
						}
					},
					{
						loader: "postcss-loader",
						options: {
							ident: 'postcss',
							sourceMap: true,
							plugins: [
								autoprefixer( {
									grid: true
								} )
							]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			}
		]
	},

	resolve: {
	  extensions: ['.js', '.jsx']
	},

	plugins: [
		new HtmlWebpackPlugin( {
			template: src + '/index.html',
			filename: 'index.html'
		} ),
		new MiniCssExtractPlugin( {
			filename: 'css/main.css',
		} )
	]
}