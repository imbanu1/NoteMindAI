// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection from config
const sequelize = require('../config/connection');

// Initialize SharedAudio model by extending Sequelize's Model class
class SharedAudio extends Model {}

// Set up fields and rules for SharedAudio model
SharedAudio.init(
  {
    // Define columns
    audioId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'audio_files',
        key: 'id',
      },
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      primaryKey: true,
    },
    permissionType: {
      type: DataTypes.ENUM('viewer', 'listener'),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'shared_audio',
  }
);

// SharedAudio exported making it available for use in the app
module.exports = SharedAudio;