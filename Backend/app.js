const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// create db connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

// connect db with node-express
db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("mysql is connected...");
});

// create db
app.get("/createDb", (res, req) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send("Database created.");
  });
});
// create table
app.get("/createUserAuthenticTable", (res, req) => {
  let sql =
    "CREATE TABLE UserAuthentic(id int AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))";
  db.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send("UserAuthentic table created.");
  });
});

// Insert post1
app.get("/addPost1", (req, res) => {
  let post = { title: "Post One", body: "This is post number one" };
  let sql = "INSERT INTO post SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts 1 added.");
  });
});
// Select all posts
app.get("/selectPosts", (req, res) => {
  let sql = "SELECT * FROM post";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(JSON.stringify(results) + " Select all from table post.");
  });
});
// Select single posts
app.get("/selectPost/:id", (req, res) => {
  let sql = `SELECT * FROM post WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(JSON.stringify(result) + " Select single id from table post.");
  });
});
// Update post
app.get("/updatePost/:id", (req, res) => {
  let newTitle = "Update Title";
  let sql = `UPDATE post SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(JSON.stringify(result) + " Post update.");
  });
});

// signUp post
app.post("/signUp", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO UserAuthentic (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(result);
    }
  );
});

app.post("/logIn", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM UserAuthentic WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username or password!!" });
      }
    }
  );
});

app.listen("3001", () => {
  console.log("server start it on port 3001!");
});
