import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const src  = path.resolve( __dirname, 'src' )
const dist = path.resolve( __dirname, 'dist' )

export default {
	mode: 'development',
	entry: {
		js: src + '/index.jsx',
		scss: src + '/styles/style.scss'
	},
	output: {
		path: dist,
		filename: '[name].js'
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
						  url: false
						}
					},
					{
						loader: 'sass-loader'
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
			filename: 'css/[name].css',
		} )
	]

  }
