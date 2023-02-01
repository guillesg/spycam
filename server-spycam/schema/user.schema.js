const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(5)
const lastName = Joi.string().min(5)
const email = Joi.string().email();
const password = Joi.string().min(8);

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required()
})

const updateUserSchema = Joi.object({
  name,
  lastName,
  email,
  password
})

const getUserSchema = Joi.object({
  id: id.required()
})


module.exports = { createUserSchema, getUserSchema, updateUserSchema }
