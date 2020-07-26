const webpack = require('webpack');
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public")
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                modules: {
                    rules: [
                        {
                            test: /\.ts$/,
                            use: "ts-loader",
                            include: path.resolve(__dirname, "src")
                        }
                    ]
                }
            }
        })
    ]
}
