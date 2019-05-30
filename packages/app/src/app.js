import express from 'express';
import prices from 'prices';
import assets from 'assets';
import {
  loggerMiddleware,
  errorMiddleware,
  securityMiddlewares,
  parsersMiddlewares
} from './middleware';

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
app.use('/assets', assets);
app.use('/prices', prices);

// Error handling
app.use(errorMiddleware);

module.exports = app;
