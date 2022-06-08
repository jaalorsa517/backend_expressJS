const User = require("./user.model");
const bycrypt = require("bcryptjs");

module.exports = {
  createUser: async (body) => {
    const { name, lastName, email, password, username } = body;
    const user = { name, lastName, email, password, username };
    const dataVoid = Object.keys(user).filter((key) => !user[key]);
    if (dataVoid.length)
      throw {
        message: `${dataVoid.join(", ")} ${
          dataVoid.length === 1 ? "es requerido" : "son requeridos"
        } para crear el usuario`,
        codeStatus: 400,
      };
    const salt = await bycrypt.genSalt(10);
    user.password = await bycrypt.hash(password, salt);
    await User.create(user);
    return { message: "Usuario creado con exito" };
  },
  getUser: async (filter, project) => {
    return await User.findOne(filter, project).lean();
  },
};
