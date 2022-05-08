const { connect } = require("mongoose");
const config = require("config");

const get = (value) => config.get(`db.mongoDb.${value}`);

module.exports = async function () {
  const port = get("port") ? `:${get("port")}` : "";

  const dbUrl = `${get("protocol")}://${get("host")}${port}`;

  const credentials = get("user") ? { user: get("user"), pass: get("password") } : {};

  const options = {
    dbName: get("db"),
    ...credentials,
  };
  try {
    return await connect(dbUrl, options);
  } catch (error) {
    throw error;
  }
};
