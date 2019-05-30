import express from 'express';
import {
  loggerMiddleware,
  errorMiddleware,
  securityMiddlewares,
  parsersMiddlewares
} from './middleware';
import assets from '../packages/assets';

const app = express();

// important if behind a proxy to ensure client IP is passed to req.ip
app.enable('trust proxy');

// Security middlewares
app.use(securityMiddlewares);

// Parse incoming request bodies
app.use(parsersMiddlewares);

// Logger
app.use(loggerMiddleware);

// Connect all routes
app.use('/assets', assets);

// Error handling
app.use(errorMiddleware);

module.exports = app;
