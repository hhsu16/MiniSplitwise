global.__basedir = __dirname;

const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const multer = require("multer");
const fs = require("fs");

const dd = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SplitWiseDB",
});

dd.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("\n\n\n mysql connected haha\n\n " + dd);
});

var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

app.use(fileUpload());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "25mb" }));
const db = require("./models");
const User = db.user;

app.post("/uploadImage", async (req, res) => {
  const { name, data, mimetype } = req.files.file;
  // let type = req.file.mimetype;
  // console.log("\n\n" + type + "\n\n");

  if (name && data) {
    User.update(
      {
        pname: name,
        data: data,
        type: mimetype,
      },
      { where: { username: req.body.username } }
    ).then((im) => {
      User.findOne({ where: { username: req.body.username } }).then((u) => {
        res.status(200).send({
          id: u.id,
          username: u.username,
          email: u.email,
          accessToken: u.password,
          phoneNumber: u.phoneNumber,
          imageData: name,
        });
      });
      // res.send("ok");
    });
  } else {
    res.sendStatus(400);
  }
});

app.get("/getImage", async (req, res) => {
  User.findOne({
    where: { username: req.body.username },
  }).then((user) => {
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: user.password,
      phoneNumber: user.phoneNumber,
      imageData: user.data,
    });
  });
});

db.sequelize.sync();

//development
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and resync Db");
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "test." });
});

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
// require("./routes/user-P.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
