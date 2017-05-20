var webpack = require("webpack");
var path = require("path");

//target output directory
var DIST_DIR = path.resolve(__dirname, "dist");
//target input directory
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    // entry path to the root js file directory
    entry: SRC_DIR + "/app/index.js",
    output: {
        // output path for bundle.js
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [{
            // test select all .js file
            test: /\.js?/,
            // include only in SRC_DIR path
            include: SRC_DIR,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015", "stage-2"]
            }
        }]
    }
};

module.exports = config;