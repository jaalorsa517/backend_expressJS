module.exports = {
  success: (res, { data = {}, statusCode = 200 }) => {
    return res.status(statusCode).json({ data });
  },
  error: (res, { error = "", statusCode = 500 }) => {
    return res.status(statusCode).json({ error });
  },
};
