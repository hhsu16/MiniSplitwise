const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Op = db.Sequelize.Op;
const fs = require("fs");
const uploadFile = require("../middleware/upload");

var jwt = require("jsonwebtoken");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

// Update a user object by finding old name then update
exports.updateUserProfile = (req, res) => {
  const username = req.body.username;
  const phoneNumber = req.body.phoneNumber;
  const newUsername = req.body.newUsername;
  const email = req.body.email;

  // update(two objs {1. updating},{2. where})
  User.update(
    { username: newUsername, email: email, phoneNumber: phoneNumber },
    {
      where: { username: username },
    }
  )
    .then((user) => {
      User.findOne({
        where: {
          username: newUsername,
        },
      }).then((u) => {
        var token = jwt.sign({ id: u.id }, config.secret, {
          expiresIn: 86400, // 24 hours
        });

        res.status(200).send({
          id: u.id,
          username: u.username,
          email: u.email,
          accessToken: token,
          phoneNumber: u.phoneNumber,
          imageData: u.pname,
          currencyType: u.currencyType,
          languageType: u.languageType,
          timezoneType: u.timezoneType,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User" + err,
      });
    });
};

// exports.upload = async (req, res) => {
//   try {
//     await uploadFile(req, res);

//     if (req.file == undefined) {
//       return res.status(400).send({ message: "Please upload a file!" });
//     }

//     res.status(200).send({
//       message: "Uploaded the file successfully: " + req.file.originalname,
//     });
//   } catch (err) {
//     res.status(500).send({
//       message: `Could not upload the file: ${req.file.originalname}. ${err}`,
//     });
//   }
// };

// exports.getListFiles = (req, res) => {
//   const directoryPath = __basedir + "/resources/static/assets/uploads/";

//   fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//       res.status(500).send({
//         message: "Unable to scan files!",
//       });
//     }

//     let fileInfos = [];

//     files.forEach((file) => {
//       fileInfos.push({
//         name: file,
//         url: baseUrl + file,
//       });
//     });

//     res.status(200).send(fileInfos);
//   });
// };

// exports.download = (req, res) => {
//   const fileName = req.params.name;
//   const directoryPath = __basedir + "/resources/static/assets/uploads/";

//   res.download(directoryPath + fileName, fileName, (err) => {
//     if (err) {
//       res.status(500).send({
//         message: "Could not download the file. " + err,
//       });
//     }
//   });
// };
