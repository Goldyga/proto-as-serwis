const glob = require("glob");
const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: glob.sync("./src/js/**/*.js*"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    watch: true,
    mode: 'development',
    devtool: "source-map",
    performance: {
        hints: false
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {   
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },


    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "main.css",
            chunkFilename: "[id].css"
          }),
        new BrowserSyncPlugin({
            files: ["*.html"],
            host: 'localhost',
            port: 3000,
            open: true,
            server: {
                baseDir: './',
            },
            watchOptions: {
                awaitWriteFinish: true
            }
        })
    ]
};