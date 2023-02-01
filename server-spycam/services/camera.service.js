const { models } = require('../libs/sequelize')

class CameraService {
  constructor() {}

  async create(data) {
    const newCamera = await models.Camera.create(data)
    return newCamera
  }

  async find() {
    const cameras = await models.Camera.findAll()
    return cameras
  }

  async findOne(id) {
    const camera = await models.Camera.findByPk(id)
    return camera
  }

  async update(changes, id) {
    const camera = await models.Camera.findByPk(id)
    const cameraUpdate = await camera.update(changes)

    return cameraUpdate
  }

  async delete(id) {
    const camera = await models.Camera.findByPk(id)
    await camera.destroy()

    return { id }
  }
}

module.exports = CameraService
