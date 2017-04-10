var webpack = require('webpack');
var path = require('path');

var DEV = path.resolve(__dirname, 'dev');
var OUTPUT = path.resolve(__dirname, 'output');

var config = {
	entry: DEV + "/spa.jsx",
	output: {
		path: OUTPUT,
		filename: "spa.js"
	},
	module:{
		loaders: [{
			include: DEV,
			loader: "babel-loader"
		}]
	}
};

module.exports = config;