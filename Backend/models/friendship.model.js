module.exports = (sequelize, Sequelize) => {
  const Friendship = sequelize.define("friendships", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  });

  return Friendship;
};
