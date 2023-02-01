const boom = require("@hapi/boom")
const { models } = require('../libs/sequelize')

class PlaceService {
  constructor() {}

  async create(data) {
    const newPlace = await models.Place.create(data)
    return newPlace
  }

  async find() {
    const places = await models.Place.findAll()

    return places
  }

  async findOne(id) {
    const place = await models.Place.findByPk(id)

    if (!place) {
      throw boom.notFound("Place not found")
    }

    return place
  }

  async update(changes, id) {
    const place = await models.Place.findByPk(id)
    const placeUpdated = place.update(changes)

    return placeUpdated
  }

  async delete(id) {
    const place = await models.Place.findByPk(id)
    await place.destroy()

    return { id }
  }
}

module.exports = PlaceService
