module.exports = {
  validateFields: (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password)
      return global.error(res, { error: { message: "Se requiere username y password", codeStatus: 400 } });
    return next();
  },
};
