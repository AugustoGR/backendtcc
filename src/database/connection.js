const  knex = require('knex');
var parse = require('pg-connection-string').parse;
const pgconfig = parse({
    client:'pg',
    connection: {
      host:'ec2-52-71-161-140.compute-1.amazonaws.com',
      database: 'd67focrh9lsj0f',
      user:     'xpgqhrjnoerxnw',
      password: 'passa0d51079126e32204ef339eca1fc46f95774dcd465a6476831bf1209c2df9509ord',
      port: '5432',
      ssl: true
    },
    migrations: {
      directory: './src/database/migrations'
    }
  });
pgconfig.ssl = {rejectUnauthorized: false};
//const configuration = require('../../knexfile.js'); 
const connection = knex({
    client: 'pg',
    connection: pgconfig,
});
//const connection = knex(configuration.production);
module.exports = connection;