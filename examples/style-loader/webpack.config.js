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

  optimization: {
    moduleIds: "deterministic",
    splitChunks: {
      chunks: "async",
      automaticNameDelimiter: "~",
      hidePathInfo: true,
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    port: 3000,
    open: true,
  },
};
