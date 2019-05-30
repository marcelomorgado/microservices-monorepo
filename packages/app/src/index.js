import 'express-async-errors';
import dotenv from 'dotenv';
import yargs from 'yargs';
import createApp from './app';
import { logger } from './middleware/logger';

dotenv.config();

const start = () => {
  let { routes } = yargs.array('routes').parse();
  routes = routes || [];

  logger.info(`Loading routes... [${routes}]`);

  // eslint-disable-next-line global-require, import/no-dynamic-require, security/detect-non-literal-require
  const app = createApp(routes.map(r => require(r).default));

  const { env } = process;
  const { APP_PORT } = env;

  app.listen(APP_PORT, () => console.info(`Express server currently running on port ${APP_PORT}`));
};

start();
