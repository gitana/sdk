const path = require('path')

module.exports = {
    entry: __dirname + '/App.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["@babel/env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
};