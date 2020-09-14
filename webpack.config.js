const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    resolve: {
        extensions:['.js', '.jsx']
    },
    optimization: {
        noEmitOnErrors: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
                cache: true,
                sourceMap: true,
            }),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                parser: {
                    requireEnsure: false,
                },
            },
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            eslintPath: require.resolve('eslint'),
                            emitError: true,
                            failOnError: true,
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'],
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attributes: {
                                list: [
                                    {
                                        tag: 'img',
                                        attribute: 'src',
                                        type: 'src',
                                    },
                                    {
                                        tag: 'link',
                                        attribute: 'href',
                                        type: 'src',
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        }),
    ],
    mode: 'development',
}