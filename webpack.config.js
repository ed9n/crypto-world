const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        open: true,
        liveReload: true,
        port: 80,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            pages: path.resolve(__dirname, 'src/pages'),
            requests: path.resolve(__dirname, 'src/requests'),
            keys: path.resolve(__dirname, 'src/keys'),
        }
    }
}