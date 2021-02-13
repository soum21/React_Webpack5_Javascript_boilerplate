var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const port = process.env.PORT || 3000;
let package = require('./package.json');

const modify = function (buffer) {
    // copy-webpack-plugin passes a buffer
    var manifest = JSON.parse(buffer.toString());

    // make any modifications you like, such as
    manifest.version = package.version;

    // pretty print to JSON with two spaces
    manifest_JSON = JSON.stringify(manifest, null, 2);
    return manifest_JSON;
}

module.exports = {
    //Marks Entry of the Application
    entry: path.resolve(__dirname, "./src/index.js"),
    //Marks Build Directory 
    output: {
        filename: "[name].bundle.js",
        publicPath: '/',
        path: path.resolve(__dirname, "./build"),
        sourceMapFilename: "[name].js.map"
    },
    optimization: {
        minimizer: [new TerserPlugin({ extractComments: false })],
    },
    module: {
        rules: [
            //Allows use javascript
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, //don't test node_modules folder
                use: {
                    loader: "babel-loader",
                },
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
            //Allows use of images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },

            //Allows Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            },
        ],
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    },
    plugins: [
        //Allows remove/clean the build folder
        new CleanWebpackPlugin(),
        //Allows pretty format on build
        new PrettierPlugin(),
        //Allows to create an index.html in our build folder
        new HtmlWebpackPlugin(
            Object.assign(
                {},
                {
                    inject: true,
                    template: path.resolve(__dirname, './public/index.html'),
                    favicon: 'public/favicon.ico',
                },
                {
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
                    },
                }
            )
        ),
        //Copy Rest of the assests from public dir
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public/manifest.json'),
                    to: path.resolve(__dirname, './build/manifest.json'),
                    transform(content, path) {
                        return modify(content);
                    },
                },
                {
                    from: path.resolve(__dirname, './public/'),
                    to: path.resolve(__dirname, './build/'),
                    globOptions: {
                        ignore: [
                            '**.json',
                            '**.html',
                            '**.ico'
                        ]
                    }
                }
            ],
        }),
        new WebpackManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: (__dirname, './public/'),
            generate: (seed, files, entrypoints) => {
                const manifestFiles = files.reduce((manifest, file) => {
                    manifest[file.name] = file.path;
                    return manifest;
                }, seed);
                const entrypointFiles = entrypoints.main.filter(
                    fileName => !fileName.endsWith('.map')
                );
                return {
                    files: manifestFiles,
                    entrypoints: entrypointFiles,
                };
            },
        }),
        new UglifyJsPlugin({
            sourceMap: false
        })
    ],
    // //Config for webpack-dev-server module
    // devServer: {
    //     host: 'localhost',
    //     port: port,
    //     historyApiFallback: true,
    //     contentBase: path.resolve(__dirname, "./public"),
    //     hot: true,
    // },
}