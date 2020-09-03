const User = require("../models/user");

exports.addUser = function (req, res, next) {
  const { firstName, lastName, userName, email, password } = req.body;
  console.log(req.body);
  const newUser = new User({
    firstName,
    lastName,
    userName,
    email,
    password,
  });

  newUser.save((err) => {
    if (err) return next(err);
    else
      res.status(201).json({
        message: { msgBody: "User successfully added", msgError: false },
      });
  });
};

exports.returnAllUsers = function (req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json({
      status: "success",
      message: "Users retrieved successfully",
      data: users,
    });
  });
};
