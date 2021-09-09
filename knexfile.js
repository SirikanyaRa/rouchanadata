module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:Here2014@localhost:/rouchana_data1'
  },



  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
      ssl: {
        require: true,
        rejectUnauthorized: false
  }
  }

};

