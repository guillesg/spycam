'use strict';

const { USER_TABLE, UserSchema } = require('../models/user.model')
const { PLACE_TABLE, PlaceSchema } = require('../models/place.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(PLACE_TABLE, PlaceSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE, UserSchema)
    await queryInterface.dropTable(PLACE_TABLE, PlaceSchema)
  }
};
