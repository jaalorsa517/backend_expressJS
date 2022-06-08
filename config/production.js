module.exports = {
  port: process.env.PORT || 10000,
  jwt: { secret: process.env.JWT_SECRET },
  db: {
    mongoDb: {
      user: process.env.MONGOUSER,
      password: process.env.MONGOPWD,
      host: process.env.MONGOHOST,
      port: process.env.MONGOPORT,
      db: process.env.MONGODB,
      protocol: process.env.MONGOPROTOCOL,
    },
  },
};
