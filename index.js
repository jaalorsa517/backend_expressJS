const app = require("./app/index.js");
const httpServer = require("http").createServer(app);
const config = require("config");
const mongoConect = require("./app/services/mongodb/index");

httpServer.listen(config.get("port"), async () => {
  try {
    await mongoConect();
    console.log("DB mongo conected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
  console.log(`Server is listening on port ${config.get("port")}`);
});
