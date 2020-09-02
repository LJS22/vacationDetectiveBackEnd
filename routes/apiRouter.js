const apiRouter = require("express").Router();
const { addDestination } = require("../controllers/destinations");
const { addUser } = require("../controllers/user");

apiRouter.route("/");

apiRouter.route("/addUser").post(addUser);

apiRouter.route("/addDestination").post(addDestination);

module.exports = apiRouter;
