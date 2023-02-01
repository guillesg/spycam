'use strict';

const { CAMERA_TABLE, CameraSchema } = require('../models/camera.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CAMERA_TABLE, CameraSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CAMERA_TABLE, CameraSchema)
  }
};
