const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

  optimization: {
    moduleIds: "deterministic",
    splitChunks: {
      chunks: "async",
      minSize: 0,
      name(module, chunks, cacheGroupKey) {
        const moduleFileName = module
          .identifier()
          .split("/")
          .reduceRight((item) => item);
        const name = `${cacheGroupKey}-${moduleFileName}`;
        return name;
      },
      cacheGroups: {
        shared: {
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
    concatenateModules: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: require.resolve("./src/index.html"),
      filename: path.join(outFolder, "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[contenthash].css",
      attributes: {
        media: "all",
      },
      ignoreOrder: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", { targets: "defaults" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  devServer: {
    port: 3000,
    open: true,
  },
};
