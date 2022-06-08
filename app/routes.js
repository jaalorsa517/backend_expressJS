const routes = require("express").Router();

routes.use("/", require("./components/root/root.route.js"));
routes.use("/users", require("./components/user/user.route"));
routes.use("/login", require("./components/session/session.route"));

module.exports = routes;
