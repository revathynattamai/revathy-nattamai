const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        host: 'localhost',
        port: 5000,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options: { name: 'img/icons/[name].[ext]' }
            },
        ],
    },

    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Revathy',
            template: 'index.html'
        }),
    ]
}