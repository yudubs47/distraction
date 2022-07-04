const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './index.tsx',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resourcePath) => !resourcePath.endsWith(".global.less"),
              }
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './index.html',
      favicon: './src/assets/img/icon.png',
    }),
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
  ],
  optimization: {
    // runtimeChunk: 'single', // ?? 含义不明
    moduleIds: 'deterministic', // 确保vendors hash 不会随src下的文件变更?
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\/]node_modules[\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [new CssMinimizerPlugin()],
  },
};