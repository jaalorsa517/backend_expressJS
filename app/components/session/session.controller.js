const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { getUser } = require("../user/user.services");

module.exports = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await getUser(
        { username },
        { password: true, roles: true, username: true, email: true, name: true, lastName: true }
      );
      if (!user) throw { message: "Usuario no encontrado", codeStatus: 404 };
      if (!bycrypt.compareSync(password, user.password))
        throw { message: "Usario o contraseña inválidos", codeStatus: 400 };
      delete user.password;
      const token = jwt.sign(JSON.stringify(user), config.get("jwt.secret"));
      return global.success(res, {
        data: {
          message: "Usuario autenticado",
          token,
        },
      });
    } catch (error) {
      console.log("ERROR LOGIN:", error.message);
      return global.error(res, {
        error: { message: error.message },
        statusCode: error.codeStatus || 500,
      });
    }
  },
};
