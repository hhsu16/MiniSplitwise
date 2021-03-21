module.exports = (sequelize, Sequelize) => {
  const Group = sequelize.define("groups", {
    groupId: {
      type: Sequelize.INTEGER,
    },
    owner: {
      type: Sequelize.STRING,
    },
    discription: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
    member1: {
      type: Sequelize.STRING,
    },
    member2: {
      type: Sequelize.STRING,
    },
    member3: {
      type: Sequelize.STRING,
    },
    member4: {
      type: Sequelize.STRING,
    },
  });

  return Group;
};
