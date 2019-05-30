import express from 'express';
import errorMiddleware from '../middleware/error';
import securityMiddlewares from '../middleware/security';
import parsersMiddlewares from '../middleware/parsers';

export const appToTest = router => {
  const app = express();
  app.use(securityMiddlewares);
  app.use(parsersMiddlewares);
  app.use(router);
  app.use(errorMiddleware);
  return app;
};

export default { appToTest };
