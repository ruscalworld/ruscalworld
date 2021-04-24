const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ "babel-loader" ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ "style-loader", "css-loader", "sass-loader" ],
            },
            {
                test: /\.(gif|png|jpe?g|svg|txt)$/i,
                use: [ "file-loader" ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/robots.txt",
                    to: "robots.txt"
                }
            ]
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        port: 8080,
    },
};