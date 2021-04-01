module.exports = (sequelize, DataTypes) => {
  return sequelize.define('list', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  },{
    timestamps: true,
  })
}