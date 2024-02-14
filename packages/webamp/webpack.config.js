const path = require("path");

module.exports = {
  entry: "./demo/js/index.tsx",
  target: "web",
  //path and filename of the final output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    hashFunction: "sha512",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(wsz|mp3)/,
        type: "asset/resource",
      },
      {
        test: /\.webamp\.css/,
        type: "asset/source",
      },
      {
        test: /\.css/,
        type: "asset/source",
      },
      {
        test: /\.(png)/,
        type: "asset/source",
      },
    ],
  },
  resolve: {
    fallback: { stream: false },
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "production",
};
