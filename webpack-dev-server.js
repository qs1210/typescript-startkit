var config = require("./webpack.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compile = webpack(config);
var server = new WebPackDevServer(compile, {});
server.listen(8080);