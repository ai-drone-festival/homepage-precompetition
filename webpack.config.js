'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    module: {
        rules: [
            {
                //test → ファイル名を検知する（CSSファイルを検知する）
                test: /\.css/,
                //CSSファイルを検知した場合、以下ルールを適用する（css-loaderを実行せよ）
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                //拡張子がpng,jpg,gif,svgを検知したら
                test: /\.(png|jpg|gif|svg)/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
        ]
    }
}