import express from 'express';

import {
  loggerMiddleware,
  errorMiddleware,
  securityMiddlewares,
  parsersMiddlewares
} from './middleware';

const createApp = routes => {
  const app = express();

  // Important if behind a proxy to ensure client IP is passed to req.ip
  app.enable('trust proxy');

  // Security middlewares
  app.use(securityMiddlewares);

  // Parse incoming request bodies
  app.use(parsersMiddlewares);

  // Logger
  app.use(loggerMiddleware);

  // Connect all routes
  app.use(routes);

  // Error handling
  app.use(errorMiddleware);

  return app;
};

module.exports = createApp;
