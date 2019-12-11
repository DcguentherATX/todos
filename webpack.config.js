const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: __dirname + "/src",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new Dotenv({ path: './env' })
      ]
};