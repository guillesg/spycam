const { Model, DataTypes, Sequelize} = require('sequelize')
const { PLACE_TABLE } = require('./place.model')


const CAMERA_TABLE = 'cameras'

const CameraSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  ip: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  placeId: {
    allowNull: false,
    field: 'place_id',
    references: {
      model: PLACE_TABLE,
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

class Camera extends Model {
  static associate(models) {
    this.belongsTo(models.Place, { as: 'place' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CAMERA_TABLE,
      modelName: 'Camera',
      timestamps: false
    }
  }
}
module.exports = { Camera, CAMERA_TABLE, CameraSchema }
