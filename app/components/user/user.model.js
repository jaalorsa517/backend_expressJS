const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  avatar: { type: String, default: "" },
  roles: { type: Array, default: ["user"] },
});

module.exports = model("user", userSchema);
