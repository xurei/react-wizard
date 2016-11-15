const path = require('path');

console.log(path.resolve(__dirname, "jsapp"));

module.exports = {
	entry: "./jsapp/main.js",

	devtool: "#inline-source-map",
	
	output: {
		path: __dirname,
		filename: "public/javascripts/bundle.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				
				// Skip any files outside of your project's `src` directory
				include: [
					path.resolve(__dirname, "jsapp"),
				],
				
				// Only run `.js` and `.jsx` files through Babel
				test: /\.jsx?$/,
				
				// Options to configure babel with
				query: {
					plugins: ['transform-runtime',"transform-class-properties"],
					presets: ['es2015', 'react'],
				}
			},
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
};