module.exports = {
	// configurations of webpack
	
	entry: 'main.js',
	
	output: {
		filename: 'scriptLoader.js'	
	},
	
	module: {
		rules: [
			
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		
	]
}