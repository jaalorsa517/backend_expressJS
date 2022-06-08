module.exports = {
  port: 10000,
  jwt: { secret: "my_secret_key" },
  db: {
    mongoDb: {
      user: "",
      password: "",
      host: "localhost",
      port: "27017",
      db: "test",
      protocol: "mongodb",
    },
  },
};
