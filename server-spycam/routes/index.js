const express = require('express')
const userRoutes = require('./user.routes')
const placeRoutes = require('./place.routes')
const cameraRoutes = require('./camera.routes')
const authRoutes = require('./auth.routes')

function routerApi(app) {
  const router = express.Router()

  app.use('/api/v1', router);
  router.use('/users', userRoutes);
  router.use('/places', placeRoutes);
  router.use('/cameras', cameraRoutes);
  router.use('/auth', authRoutes);
}

module.exports = routerApi
