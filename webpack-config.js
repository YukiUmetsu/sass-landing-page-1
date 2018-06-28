var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: "build",
        filename: 'build.js'
    },
    devtool: 'inline-source-map',
    watch: true,
    module : {
        rules : [
            {
                test : /\.js$/,
                include : APP_DIR,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query : {
                    presets:['es2015'],
                }
            },
            {
                test:/\.css$/,
                include: APP_DIR,
                loader:['style', 'css']
            },
            {
                test:/\.scss$/,
                include: APP_DIR,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HTMLPlugin(),
    ]
};