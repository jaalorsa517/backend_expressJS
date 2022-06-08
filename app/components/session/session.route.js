const Router = require("express").Router();
const { isMongoReady } = require("../../helpers/validateRoute.mdlwr");
const { login } = require("./session.controller");
const { validateFields } = require("./session.mdlwr");

Router.post("/", [isMongoReady, validateFields], login);

module.exports = Router;
