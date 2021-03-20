// const fs = require("fs");
// const db = require("../models");
// const User = db.user;

// const uploadFiles = async (req, res) => {
//   try {
//     console.log(req.file);

//     if (req.file == undefined) {
//       return res.send(`You must select a file.`);
//     }

//     User.update(
//       {
//         type: req.file.mimetype,
//         pname: req.file.originalname,
//         data: fs.readFileSync(
//           __basedir + "/resources/static/assets/uploads/" + req.file.filename
//         ),
//       },
//       { where: { username: username } }
//     ).then(() => {
//       User.findOne({
//         where: {
//           username: newUsername,
//         },
//       }).then((image) => {
//         fs.writeFileSync(
//           __basedir + "/resources/static/assets/tmp/" + pname,
//           image.data
//         );
//         return res.send(`File has been uploaded.`);
//       });
//     });
//   } catch (error) {
//     console.log(error);
//     return res.send(`Error when trying upload images: ${error}`);
//   }
// };

// module.exports = {
//   uploadFiles,
// };
