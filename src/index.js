// A dead simple ES6 async/await support hack for ExpressJS
// Import this script somewhere **before** you start using express
import 'express-async-errors';

require('dotenv').config();
const app = require('./app');

const { env } = process;
const { APP_PORT } = env;

app.listen(APP_PORT, () => console.info(`Express server currently running on port ${APP_PORT}`));
