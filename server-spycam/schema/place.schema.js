const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3)
const userId = Joi.number().integer()

const createPlaceSchema = Joi.object({
  name: name.required(),
  userId: userId.required(),
})

const updatePlaceSchema = Joi.object({
  name
})

const getPlaceSchema = Joi.object({
  id: id.required(),
})

const getPlaceByOwnerSchema = Joi.object({
  userId: userId.required(),
})

module.exports = { createPlaceSchema, updatePlaceSchema, getPlaceSchema, getPlaceByOwnerSchema }
