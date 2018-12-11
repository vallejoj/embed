'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fake = sequelize.define(
    'Fake',
    {
      boolean: DataTypes.BOOLEAN,
      age: DataTypes.STRING,
      productId: DataTypes.STRING,
      months: DataTypes.INTEGER
    },
    {}
  );
  Fake.associate = function(models) {
    // associations can be defined here
  };
  return Fake;
};
