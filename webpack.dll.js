const path = require("path");
// 引入webpack
const webpack = require("webpack");

module.exports = {
  entry: ["react", "react-dom"],
  output: {
    filename: "react.dll.js",
    path: path.resolve("dll"),
    library: "react", // 打包后被引用的变量名
  },
  plugins: [
    // 动态链接库
    new webpack.DllPlugin({
      name: "react",
      path: path.resolve("dll", "manifest.json"),
    }),
  ],
};
