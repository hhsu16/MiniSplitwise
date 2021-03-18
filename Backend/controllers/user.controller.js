const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

// Update a user object by finding old name then update
exports.update = (req, res) => {
  const username = req.body.username;

  const phoneNumber = req.body.phoneNumber;
  const newUsername = req.body.newUsername;
  const email = req.body.email;

  // update(two objs {1. updating},{2. where})
  User.update(
    { phoneNumber: phoneNumber, email: email, username: newUsername },
    {
      where: { username: username },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message:
            `Cannot update User with Maybe User was not found or req.body is empty!` +
            phoneNumber,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User",
      });
    });
  // User.findOne({
  //   where: { username: req.params.oldUsername },
  // })
  //   .then((user) => {
  //     if (!user) {
  //       return res.status(404).send({ message: "User Not Found." });
  //     }
  //     user
  //       .update({
  //         where: {
  //           username: req.params.newUsername,
  //           phoneNumber: req.params.phoneNumber,
  //           email: req.params.email,
  //         },
  //       })
  //       .then((num) => {
  //         if (num == 1) {
  //           res.send({
  //             message: "Updated successfully.",
  //           });
  //         } else {
  //           res.send({
  //             message: `Cannot update2`,
  //           });
  //         }
  //       });
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: "Error updating a User " + err,
  //     });
  //   });
};
