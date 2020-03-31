const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清除dist
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动引入js

module.exports = {
  mode: "production",
  entry: "./src/app.js", //默认配置：./src/index.js
  output: {
    path: __dirname + "/dist", //默认配置：/dist
    filename: "[name].bundle.js",
    chunkFilename: "[name].[chunkhash:5].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["transform-runtime"],
              presets: ["es2015", "react", "stage-2"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      //配置
      filename: "index.html", //输出文件名
      template: "./index.html" //以当前目录下的index.html文件为模板生成dist/index.html文件
    })
  ]
};
