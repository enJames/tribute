const tributes = (sequelize, DataTypes) => {
  const Tributes = sequelize.define('Tributes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Tributes;
};

export default tributes;
