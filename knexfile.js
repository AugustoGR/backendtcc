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
      database:'d67focrh9lsj0f',
      user:'xpgqhrjnoerxnw',
      password: '5432'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

};
