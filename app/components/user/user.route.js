const Router = require("express").Router();
const user = require("./user.controller");
const { isMongoReady } = require("../../helpers/validateRoute.mdlwr");

Router.post("/", isMongoReady, user.createUser);

module.exports = Router;
