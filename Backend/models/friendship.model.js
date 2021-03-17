module.exports = (sequelize, Sequelize) => {
  const Friendship = sequelize.define("friendships", {
    friendId: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    billId: {
      type: Sequelize.INTEGER,
    },
  });

  return Friendship;
};
