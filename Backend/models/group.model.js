module.exports = (sequelize, Sequelize) => {
  const Group = sequelize.define("groups", {
    groupId: {
      type: Sequelize.STRING,
    },
    names: {
      type: Sequelize.STRING,
    },
    discription: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.STRING,
    },
    numberPeople: {
      type: Sequelize.INTEGER,
    },
  });

  return Group;
};
