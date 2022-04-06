const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const outFolder = path.resolve(__dirname, "./dist/");

module.exports = {
  target: "web",

  entry: require.resolve("./src/index.js"),
  output: {
    filename: "[name].js",
    chunkFilename: "[name].[contenthash].js",
    path: outFolder,
    publicPath: "/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: require.resolve("./src/index.html"),
      filename: path.join(outFolder, "index.html"),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
  },
};
