const route = require("express").Router();
const root = require("./root.controller.js");

route.get("/", root.get);
route.post("/", root.post);
route.put("/", root.put);
route.delete("/:id", root.delete);

module.exports = route;
