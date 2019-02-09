module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    userName: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    //   defaultValue: sequelize.literal('now()')
    // },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate:'utf8_general_ci'
  });
};
