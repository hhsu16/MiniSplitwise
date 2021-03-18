module.exports = (sequelize, Sequelize) => {
  const Friendship = sequelize.define("friendships", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    billId: {
      type: Sequelize.INTEGER,
    },
    ownName: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    discription: {
      type: Sequelize.STRING,
    },
    oweName: {
      type: Sequelize.STRING,
    },
  });

  return Friendship;
};
