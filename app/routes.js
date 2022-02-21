const routes = require("express").Router();

routes.use("/", require("./components/root/root.route.js"));

module.exports = routes;
