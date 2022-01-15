const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[contenthash].js',
  },
  mode: process.env.NODE_ENV || 'development',
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["ts-loader"]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            "style-loader", 
            "@teamsupercell/typings-for-css-modules-loader",
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            }
           ]
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ["file-loader"]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.join(__dirname, "public", "index.html") })
    ]
}
