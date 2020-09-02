const User = require("../models/user");

exports.addUser = function (req, res, next) {
  const { firstName, lastName, userName, email, password } = req.body;

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

sendData = async (e) => {
  const response = await fetch(
    "http://localhost:4500/vacationdetective/v1/addUser",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      }),
    }
  );
  e.preventDefault();
  const data = await response.json();
  console.log(data);
};
