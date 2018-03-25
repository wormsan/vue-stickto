const path = require('path')
module.exports = {
    entry: './examples/src/index.js',
    output: {
        path: path.resolve(__dirname, 'examples/dist'),
        filename: 'build.js',
    },
    resolve: {
        alias: {
            'vue-stickto': path.resolve(__dirname, 'index.js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
        ],
    },
}