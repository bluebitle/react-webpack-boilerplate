const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.jsx', '.json']
    },
    entry: {
        // vendor: [],
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {

        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ],
    devServer: {
        host: '0.0.0.0',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true,
    },
};
