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
    friendshipId: {
      type: Sequelize.INTEGER,
    },
    groupId: {
      type: Sequelize.INTEGER,
    },
  });

  return User;
};