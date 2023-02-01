const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3)
const ip = Joi.string().uri()
const placeId = Joi.number().integer()

const createCameraSchema = Joi.object({
  name: name.required(),
  ip: ip.required(),
  placeId: placeId.required(),
})

const updateCameraSchema = Joi.object({
  name,
  ip
})

const getCameraSchema = Joi.object({
  id: id.required(),
})

module.exports = { getCameraSchema, createCameraSchema, updateCameraSchema }
