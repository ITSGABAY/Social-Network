module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Users.associate = (models) => {
    Users.hasMany(models.Posts, { onDelete: "cascade" });
    Users.hasOne(models.Profiles, { onDelete: "cascade" });
    Users.hasMany(models.Comments, { onDelete: "cascade" });
  };
  return Users;
};
