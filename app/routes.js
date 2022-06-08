const routes = require("express").Router();

routes.use("/", require("./components/root/root.route.js"));
routes.use("/users", require("./components/user/user.route"));

module.exports = routes;
