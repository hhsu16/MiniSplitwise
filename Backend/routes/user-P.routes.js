module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.put("/updateProfile", users.update);

  app.use("/api/users", router);
};
