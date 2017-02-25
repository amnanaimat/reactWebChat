var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry :['script!jquery/dist/jquery.min.js',
	'script!foundation-sites/dist/js/foundation.min.js',
	'./app/app.jsx'],
	externals:{
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery':'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root : __dirname,
		alias :{
			
			ApplicationCustomStyle: 'app/styles/app.scss',
			ChatApp: 'app/components/chatApp.jsx',
			MessageList: 'app/components/MessageList.jsx',
			Message: 'app/components/Message.jsx',
			MessageForm: 'app/components/MessageForm.jsx',
			UserList: 'app/components/UserList.jsx',
			ChangeNameForm: 'app/components/ChangeNameForm.jsx',
		},
		extensions: ['','.js','.jsx']
	},
	module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0' }
    ]
  },
  sassLoader:{
	  includePaths:[
	  path.resolve(__dirname,'./node_modules/foundation-sites/scss')
	  ]
		  
	  
	  
  },
  devtool: 'cheap-module-eval-source-map'


}