path = require("path")

module.exports = {
    entry: "./public/javascripts/index.js",
    output: {
        path: __dirname+'/public/javascripts',
        filename: "./build.js"
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
        ]
    }
};
