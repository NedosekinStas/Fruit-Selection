const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const isDev = process.env.NODE_ENV === 'development';

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        port: 8000,
        hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader, 
                    options:{
                        hmr: isDev,
                        reloadAll: true
                    },
                },
                'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader, 
                    options:{
                        hmr: isDev,
                        reloadAll: true
                    },
                },
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            }
        ]
    }
}