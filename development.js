import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src  = path.resolve( __dirname, 'src' )
const dist = path.resolve( __dirname, 'dist' )

export default {
	mode: 'development',
	entry: src + '/index.jsx',

	output: {
		path: dist,
		filename: 'bundle.js'
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
				test: /\.css$/,
				loaders:['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
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
		} )
	]

  }
