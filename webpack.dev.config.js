const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
  entry: "./src/适配器模式/Adaptee",
  output: {
    path: __dirname,
    filename: "./release/bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./release"), // 设置根目录
    open: true, // 自动打开浏览器
    port: 8000, // 设置端口号
  },
}
