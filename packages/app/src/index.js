import 'express-async-errors';
import dotenv from 'dotenv';
import prices from 'prices';
import assets from 'assets';

dotenv.config();
const createApp = require('./app');

const app = createApp([prices, assets]);

const { env } = process;
const { APP_PORT } = env;

app.listen(APP_PORT, () => console.info(`Express server currently running on port ${APP_PORT}`));
