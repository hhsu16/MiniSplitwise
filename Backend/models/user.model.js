module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    pname: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.BLOB("long"),
    },
    currencyType: {
      type: Sequelize.STRING,
    },
    languageType: {
      type: Sequelize.STRING,
    },
    timezoneType: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
