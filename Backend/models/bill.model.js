module.exports = (sequelize, Sequelize) => {
  const Bill = sequelize.define("bills", {
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

  return Bill;
};
