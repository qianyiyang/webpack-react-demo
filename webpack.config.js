const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清除dist
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动引入js
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

const MyPlugin = require("./myPlugin");

module.exports = {
    entry: "./src/app.js", //默认配置：./src/index.js
    output: {
        path: __dirname + "/dist", //默认配置：/dist
        filename: "[name].bundle.js",
        chunkFilename: "[name].[chunkhash:5].js",
    },
    resolveLoader: {
        modules: [
            path.resolve(__dirname, "loader"),
            path.resolve(__dirname, "node_modules"),
        ],
    },
    module: {
        noParse: /jquery|lodash/,
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: ["transform-runtime"],
                            presets: ["es2015", "react", "stage-2"],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /.md$/,
                use: [
                    "html-loader",
                    "markdown-loader?name=react",
                    // {
                    //     loader: "markdown-loader?name=react",
                    //     options: {
                    //         name: "react",
                    //     },
                    // },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //配置
            filename: "index.html", //输出文件名
            template: "./index.html", //以当前目录下的index.html文件为模板生成dist/index.html文件
        }),
        // 引用对应的动态链接库的manifest.json文件
        // 这样以后再引入react的时候就会优先在json文件里去寻找
        new webpack.DllReferencePlugin({
            manifest: path.resolve("dll", "manifest.json"),
        }),

        // 直接将打包好的react.dll.js添加到html模板
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve("dll", "react.dll.js"),
        }),

        // 忽略moment目录下的locale文件夹
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),

        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    // 引入的模块
                    module: "jquery",
                    // cdn的地址
                    entry: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js",
                    // 挂载到了window上的名称
                    // window.jQuery就可以全局使用
                    global: "$",
                },
            ],
        }),

        new MyPlugin(),
    ],
};
