import express from 'express';
import {
  loggerMiddleware,
  errorMiddleware,
  securityMiddlewares,
  parsersMiddlewares
} from './middleware';

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
// app.use('/departments', departments);

// Error handling
app.use(errorMiddleware);

module.exports = app;
