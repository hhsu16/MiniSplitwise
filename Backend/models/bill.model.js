module.exports = (sequelize, Sequelize) => {
  const Bill = sequelize.define("bills", {
    ownName: {
      type: Sequelize.STRING,
    },
    billId: {
      type: Sequelize.INTEGER,
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
    groupId: {
      type: Sequelize.INTEGER,
    },
  });

  return Bill;
};
