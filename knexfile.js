// Update with your config settings.


module.exports = {

  /*development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },*/
  development: {
    client:'mysql',
    connection: {
      host:'localhost',
      database:'tccfinal',
      user:'root',
      password: ''
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production:  {
    client:'pg',
    connection: {
      host:'ec2-52-71-161-140.compute-1.amazonaws.com',
      database: 'd67focrh9lsj0f',
      user:     'xpgqhrjnoerxnw',
      password: 'passa0d51079126e32204ef339eca1fc46f95774dcd465a6476831bf1209c2df9509ord',
      port: '5432',
      ssl: true
    },
    ssl: {
      rejectUnauthorized: false
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }

};
