module.exports = {
  get: function (req, res) {
    try {
      // throw { message: "This is a test error" };
      return global.success(res, { data: { message: "Welcome to the API" } });
    } catch (error) {
      return global.error(res, { error: error.message, statusCode: 400 });
    }
  },
  post: function (req, res) {
    try {
      const { name, email } = req.body;
      console.log(name, email);
      return global.success(res, { data: { message: "Usuario recibido" }, statusCode: 201 });
    } catch (error) {
      return global.error(res, { error: error.message, statusCode: 401 });
    }
  },
  put: function (req, res) {
    try {
      const { id, name: namequery, email: emailquery } = req.query;
      const { name, email } = req.body;
      console.log("body", name, email);
      console.log("query", namequery, emailquery);
      return global.success(res, { data: { message: "Usuario actualizado" }, statusCode: 200 });
    } catch (error) {
      return global.error(res, { error: error.message, statusCode: 401 });
    }
  },
  delete: function (req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      return global.success(res, { data: { message: "Usuario eliminado" }, statusCode: 204 });
    } catch (error) {
      return global.error(res, { error: error.message, statusCode: 401 });
    }
  },
};
