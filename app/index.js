const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

global.success = require("./helpers/responses").success;
global.error = require("./helpers/responses").error;

app.use("/api/v1", require("./routes.js"));

module.exports = app;
