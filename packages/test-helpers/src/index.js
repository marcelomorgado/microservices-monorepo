import express from 'express';
import errorMiddleware from '../../app/dist/middleware/error';
import securityMiddlewares from '../../app/dist/middleware/security';
import parsersMiddlewares from '../../app/dist/middleware/parsers';

export const appToTest = router => {
  const app = express();
  app.use(securityMiddlewares);
  app.use(parsersMiddlewares);
  app.use(router);
  app.use(errorMiddleware);
  return app;
};

export default { appToTest };
