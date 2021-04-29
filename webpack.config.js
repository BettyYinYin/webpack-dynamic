const path = require('path')
module.exports = {
    mode: 'none',
    // entry: './index.js', 
    entry: {
        index: './index.js',
        index2: './index2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'index.bundle.js',
        filename: '[name].bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {

    }
}