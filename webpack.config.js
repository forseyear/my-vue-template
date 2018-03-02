const webpack = require("webpack");

module.exports = {
  cache: true,
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              loaders: {
                scss: "vue-style-loader!css-loader!sass-loader",
                sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
              }
            }
          }
        ]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|jpeg|png|gif|svg)$/, loaders: "url-loader" }
    ]
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};
