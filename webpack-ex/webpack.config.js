const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        // THIS LINE NEEDS TO BE CHANGED TO SWTICH FROM JSX TO JS
        activity: path.join(__dirname, "src", "main.jsx")
    },
    output: {
        filename: path.join("lib", "main.js"),
        path: path.resolve(__dirname, "lib")
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    module: {
        rules: [ { test: /.jsx?$/, loader: "babel-loader"} ]
    }
}
