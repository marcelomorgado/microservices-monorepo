import helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import cors from 'cors';

const { env } = process;
const { NODE_ENV } = env;

const isProd = NODE_ENV === 'production';

/*
 * Rate limit middlewares
 */
export const rateLimiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: isProd ? 100 : 0
});

/*
 * Headers middlewares
 */
export const helmetMiddleware = helmet();
export const corsMiddleware = cors();

/*
 * Export all
 */
export default [rateLimiter, helmetMiddleware, corsMiddleware];
