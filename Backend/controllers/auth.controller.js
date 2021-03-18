const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Friendship = db.friendship;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    phoneNumber: 0,
  })
    .then(() => {
      res.send({ message: "User was registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token,
        phoneNumber: user.phoneNumber,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.createFriendship = (friendshipId, friend) => {
  return Friendship.create({
    name: friend.name,
    email: friend.email,
    friendshipId: friendshipId,
  })
    .then((friend) => {
      console.log(">> Created friend: " + JSON.stringify(friend, null, 4));
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while creating friend: ", err);
    });
};
