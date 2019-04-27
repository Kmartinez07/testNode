const mongoose = require('mongoose');

async function connect() {
  const { DB_PORT, DB_NAME, DB_HOST } = process.env;
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  };
  const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

  mongoose.connect(connectionString, options);
  mongoose.connection.on('error', error => console.log(error));
  mongoose.connection.once('open', () => {
    console.log(`Connected to the ${DB_NAME}`);
  });
  return mongoose.connection;
}

module.exports = { connect };
