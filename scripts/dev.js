/**
 * Define Node Environment
 * @type {string}
 */
process.env.NODE_ENV = "development";

const webpack = require("webpack");
const config = require("../webpack.config");
const webpackDevServer = require("webpack-dev-server");

/**
 * @type {webpack.compiler}
 */
const compiler = webpack(config);
const server = new webpackDevServer(config.devServer, compiler);

server.start(config.devServer.port, config.devServer.host);
