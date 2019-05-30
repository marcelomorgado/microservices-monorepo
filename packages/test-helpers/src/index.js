import express from 'express';
import errorMiddleware from '../../../dist/middleware/error';
import securityMiddlewares from '../../../dist/middleware/security';
import parsersMiddlewares from '../../../dist/middleware/parsers';

export const appToTest = router => {
  const app = express();
  app.use(securityMiddlewares);
  app.use(parsersMiddlewares);
  app.use(router);
  app.use(errorMiddleware);
  return app;
};

export default { appToTest };
