const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { default: test } = require('node:test');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
        ],
    },
});