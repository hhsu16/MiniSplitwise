module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "SplitWiseDB",
  dialect: "mysql",
  pool: {
    max: 600,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// // create db connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "nodemysql",
// });
