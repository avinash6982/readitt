const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "/src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /(\.css|\.scss)$/,
                exclude: /node_modules/,
                type: 'asset',
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
    ],
};