const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
    target: 'node',
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, path.resolve(__dirname, './src/utilities/'))
        },
        extensions: ['.js', '.jsx']
    },
    externals: ["tessel", "firebase", "johnny-five", "tessel-io"],
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader' },
        ]
    }
}