const { connection } = require("mongoose");

module.exports = {
  isMongoReady: (req, res, next) => {
    if (!connection.db)
      return global.error(res, {
        error: { message: "MongoDb no está disponible" },
      });
    return next();
  },
};
