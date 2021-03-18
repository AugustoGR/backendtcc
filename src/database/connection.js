const  knex = require('knex');
var pg = require('pg');
pg.defaults.ssl = 'true';
const configuration = require('../../knexfile.js'); 
const connection = knex(configuration.production);
module.exports = connection;