const environment = process.env.NODE_ENV || 'development';
const config = require('./knex22');
const environmentConfig = config[environment];
const knex = require('knex');
const connection = knex(environmentConfig);

module.exports = connection;