const express = require('express');

const UserService = require('../services/user.service');
const { createUserSchema, getUserSchema, updateUserSchema } = require('../schema/user.schema')
const validatorHandler = require('../middlewares/validator.handler')

const router = express.Router();
const service = new UserService

router.get('/', async (req, res, next) => {
    try {
      const users = await service.find()
      res.json(users)
    } catch (error) {
      next(error)
    }
  }
);

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await service.findOne(id)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body
      const user = { ...data,}
      if (data.password === data.confirmPassword) {

      }
      const newUser = await service.create(data)
      res.status(201).json(newUser)
    } catch (error) {
      next(error)
    }
  }
);

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const data = req.body

      const userUpdated = await service.update(id, data)

      res.json(userUpdated)
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      await service.delete(id)
      res.status(201).json({ id });
    } catch (error) {
      next(error)
    }
  }
);

module.exports = router
