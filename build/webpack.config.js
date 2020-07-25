const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts', // 入口文件
  output: {
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'], // 配置引入文件时的后缀名
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader', // 使用ts-loader来处理.ts，.tsx文件
        exclude: /node_modules/, // 编译的时候不去处理node_modules文件
      },
    ],
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map', // 能够在调试的时候方便定位到代码
  devServer: {
    contentBase: './dist', // 本地开发环境基于哪个根文件运行
    stats: 'errors-only', // 当有错的时候控制台输出
    compress: false,
    host: 'localhost',
    port: 8089,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist'],
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html',
    }),
  ],
}
