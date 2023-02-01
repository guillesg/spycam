const express = require('express')

const validatorHandler = require('../middlewares/validator.handler')
const UserService = require('../services/camera.service')
const { getCameraSchema, createCameraSchema, updateCameraSchema } = require('../schema/camera.schema')

const router = express.Router()
const service = new UserService

router.get('/',
  async (req, res , next) => {
    try {
      const cameras = await service.find()
      res.json(cameras)
    } catch (error) {
      next(error)
    }
  }
)

router.get('/:id',
  validatorHandler(getCameraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const camera = await service.findOne(id)
      res.status(200).json(camera)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createCameraSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newCamera = await service.create(body)
      res.status(200).json(newCamera)
    } catch (error) {
      next(error)
    }
  }
)

router.patch('/:id',
  validatorHandler(getCameraSchema, 'params'),
  validatorHandler(updateCameraSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body

      const camera = await service.findOne(id)
      const cameraUpdated = await camera.update(body, id)
      res.status(200).json(cameraUpdated)
    } catch (error) {
      next(error)
    }
  }
)

router.delete("/:id",
  validatorHandler(getCameraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      await service.delete(id)

      res.status(201).json({ id })
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
