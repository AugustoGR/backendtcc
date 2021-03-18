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
      url: process.env.DATABASE_URL,
      ssl: true
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }

};
