const { Model, DataTypes, Sequelize} = require('sequelize')
const { USER_TABLE } = require('./user.model')

const PLACE_TABLE = 'places'

const PlaceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  userId: {
    allowNull: false,
    field: 'user_id',
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    type: DataTypes.INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Place extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' })
    this.hasMany(models.Camera, {
      as: 'camera',
      foreignKey: 'placeId'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PLACE_TABLE,
      modelName: 'Place',
      timestamps: false
    }
  }
}

module.exports = { PLACE_TABLE, PlaceSchema, Place }
