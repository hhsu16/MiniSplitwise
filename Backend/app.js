const express = require("express");
const mysql = require("mysql");

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

// connect
db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("mysql is connected...");
});

const app = express();

// create db
app.get("/createDb", (res, req) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (error, result) => {
    if (error) throw error;

    console.log(result);
    res.send("database created.");
  });
});

// create table
app.get("/createPostsTable", (res, req) => {
  let sql =
    "CREATE TABLE post(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))";
  db.query(sql, (error, result) => {
    if (error) throw error;

    console.log(result);
    res.send("Posts table created.");
  });
});

app.listen("3000", () => {
  console.log("server start it on port 3000!");
});
