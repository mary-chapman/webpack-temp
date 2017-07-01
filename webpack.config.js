const path = require('path');
const webpack = require('webpack');
 
  const config = {
   entry: './src/index.js',
   output: {
       path: path.resolve(__dirname, 'build'),
       filename: 'bundle.js',
       publicPath: '/build/'
   },
	module: {
   		rules: [
            //babel, for es2015 and JSX
            {
                use: 'babel-loader',
                test: /.\js$/,
                exclude: /node_modules/
            },
            //css
           {
               use: ['style-loader', 'css-loader'],
               test: /\.css$/
           },
           //SASS 
            {
            test: /\.(sass|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
            },
            //image files
            {
                test: /\.(jpe?g|png|gif|svg)$/,
	            use: [
                    {
		                loader: 'url-loader',
		                options: { limit: 40000 }
	                },
		            'image-webpack-loader'
                ]
            },
            //font awesome
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },   		
           ]},
           //hot re-loading the server
            devServer: {
                hot: true
            },
            plugins:[
                    //jQuery plugin
                    new webpack.ProvidePlugin({   
                        jQuery: 'jquery',
                        $: 'jquery',
                        jquery: 'jquery'
                })
            ],

}
 
module.exports = config;
