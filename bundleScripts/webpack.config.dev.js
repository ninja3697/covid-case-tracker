const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");

process.env.NODE_ENV = "development";

const SOURCE_PATH = path.join(__dirname, "../src");
const DIST_PATH = path.join(__dirname, "../dist");

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: path.join(SOURCE_PATH, "index.js"),
  output: {
    path: DIST_PATH,
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    port: "5000",
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SOURCE_PATH}/index.html`,
    }),
    new InjectManifest({
      swSrc: path.join(SOURCE_PATH, "src-sw.js"),
      swDest: "sw.js",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
