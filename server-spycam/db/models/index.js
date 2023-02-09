const { User, UserSchema } = require('./user.model')
const { Place, PlaceSchema } = require('./place.model')
const { Camera, CameraSchema } = require('./camera.model')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Place.init(PlaceSchema, Place.config(sequelize))
  Camera.init(CameraSchema, Camera.config(sequelize))

  User.associate(sequelize.models)
  Place.associate(sequelize.models)
  Camera.associate(sequelize.models)
}

module.exports = setupModels
