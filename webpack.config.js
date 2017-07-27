var path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        publicPath: "/assets/",
        path: path.resolve(__dirname, "build")
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        // loaders: [
        //     // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
        //     { test: /\.tsx?$/, loader: "ts-loader" },

        // ]
        // use: [
        //     {
        //         loader: "ts-loader",
        //         options: {
        //             extensions: [".ts", ".tsx"]
        //         }

        //     }
        // ]
        rules: [
            {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['env']
                    }
                }
            },
            {
            test: /\.tsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                    loader: 'ts-loader',
                }
            },
            {
            test: /\.scss?$/,
            exclude: /(node_modules|bower_components)/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    }
};