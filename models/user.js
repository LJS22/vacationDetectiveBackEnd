const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    bcrypt: true,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

const User = (module.exports = mongoose.model("User", userSchema));
