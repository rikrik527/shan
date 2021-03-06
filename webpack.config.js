const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob-all');
module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, './src'),
    entry: {

        app: ["./app/index.js"],
        form: ["./form/index.js"],
        login: ["./login/index.js"]
            // vendor: ["./vendor/vendor.js", './app/index.js', './form/index.js', './login/index.js']


    },

    output: {
        path: path.join(__dirname, 'public', 'assets'),
        filename: 'js/[name].bundle.js',
        publicPath: '/public/assets/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                }),




            },
            // {
            //     test: /\.(scss)$/,
            //     use: [{
            //       loader: 'style-loader', // inject CSS to page
            //     }, {
            //       loader: 'css-loader', // translates CSS into CommonJS modules
            //     }, {
            //       loader: 'postcss-loader', // Run post css actions
            //       options: {
            //         plugins: function () { // post css plugins, can be exported to postcss.config.js
            //           return [
            //             require('precss'),
            //             require('autoprefixer')
            //           ];
            //         }
            //       }
            //     }, {
            //       loader: 'sass-loader' // compiles SASS to CSS
            //     }]
            //   },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader'],


                })
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', 'react']
                        ]
                    }
                }]
            }, {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'images/[name].[ext]?[hash]'
                },

            }, {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'media/[name].[ext]?[hash]'
                }

            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                query: {
                    name: 'json/[name].[ext]?[hash]'

                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public/assets/html'),
        compress: true,
        port: 8080,
        stats: 'errors-only'

    },
    plugins: [

        new webpack.LoaderOptionsPlugin({
            options: {
                minimize: true,
                postcss: [
                    autoprefixer({
                        browsers: ['last 2 version', '>5%', 'Chrome >=49', 'iOS >= 8',
                            'Safari >= 8', 'Firefox >=49', 'Edge >= 11', 'ie >= 9'
                        ]
                    }),
                ]
            }

        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: 'vendor.bundle.js',
        //     'minChunks': 3
        // }),


        //        new webpack.optimize.CommonsChunkPlugin({
        //            'name':'vendor',
        //            'filename':'vendor.js',
        //            'minChunks':'4',

        //        }
        //    ),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: 'vendor-[hash].js',
        //     minChunks(module) {
        //         const context = module.context;
        //         return context && context.indexOf('node_modules') >= 0;
        //     },
        // }),
        new HtmlWebpackPlugin({
            title: 'shanli',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
                collapseWhitespace: true
            },
            hash: true,
            inject: true,
            template: './template/shan.html', //load custom template .ejs by default.
            filename: 'html/shan.html',
            chunks: ['app', 'react']
        }), new HtmlWebpackPlugin({
            title: 'sign-up-form',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
                collapseWhitespace: true
            },
            hash: true,
            inject: true,
            template: './template/index.html', //load custom template .ejs by default.
            filename: 'html/index.html',
            chunks: ['form']
        }),
        new HtmlWebpackPlugin({
            title: 'login-page',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
                collapseWhitespace: true
            },
            hash: true,
            inject: true,
            template: './template/login.html', //load custom template .ejs by default.
            filename: 'html/login.html',
            chunks: ['login']
        }),

        new webpack.optimize.UglifyJsPlugin({
            test: /(\.jsx|\.js)$/,
            minimize: true,
            sourceMap: true,
            compress: {
                sequences: true,
                dead_code: true,
                unused: true,
                warnings: false,
                screw_ie8: true,
                conditionals: true,

                comparisons: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            compressor: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].bundle.css',
            disable: false,
            allChunks: true,

        }),
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync(path.join(__dirname, 'src/template/*.html')),
        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
                // Popper:['Popper.js', 'defalut']
                // in case you imported plugins individually, you must also require them there ;

        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}