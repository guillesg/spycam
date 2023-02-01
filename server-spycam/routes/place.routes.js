const express = require('express');
const passport = require('passport');

const PlaceService = require('../services/place.service');
const validatorHandler = require('../middlewares/validator.handler')
const { createPlaceSchema, updatePlaceSchema, getPlaceSchema } = require('../schema/place.schema')

const router = express.Router();
const service = new PlaceService;

router.get('/', async (req, res, next) => {
  try {
    const places = await service.find()

    res.json(places)
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validatorHandler(getPlaceSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const place = await service.findOne(id)
      res.json(place)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createPlaceSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body
      const newPlace = await service.create(body)

      res.json(newPlace)
    } catch (error) {
      next(error)
    }
  }
)

router.patch('/:id',
  validatorHandler(getPlaceSchema, "params"),
  validatorHandler(updatePlaceSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body
      const { id } = req.params
      const updatedPlace = await service.update(body, id)
      res.status(200).json(updatedPlace)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id',
  validatorHandler(getPlaceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      await service.delete(id)
      res.status(201).json({id});
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
