require('dotenv').config({ overwrite: true });
const database = require('./database');
const server = require('./server');
const { APP_PORT, APP_HOST } = process.env;

async function start() {
  await database.connect();
}

start()
  .then(() =>
    server.listen(APP_PORT, () => {
      console.log(`Server running on port ${APP_HOST}:${APP_PORT}`);
    })
  )
  .catch(err => console.log(err));
