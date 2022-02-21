const app = require("./app/index.js");
const httpServer = require("http").createServer(app);
const config = require("config");

httpServer.listen(config.get("port"), () => {
  console.log(`Server is listening on port ${config.get("port")}`);
});
