var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
module.exports = [
  {
    mode: "development",
    entry: "./src/browser/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [{ test: /\.(js)$/, use: "babel-loader" }]
    }
  },
  {
    mode: "development",
    entry: "./src/server/index.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
      path: __dirname,
      filename: "server.js",
      publicPath: "/"
    },
    module: {
      rules: [{ test: /\.(js)$/, use: "babel-loader" }]
    }
  }
];
