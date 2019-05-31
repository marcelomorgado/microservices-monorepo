import winston from 'winston';
import morgan from 'morgan';

const { env } = process;
const { NODE_ENV, LOG_LEVEL } = env;

export const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.json()
});

if (NODE_ENV === 'production') {
  logger.add(new winston.transports.File({ filename: 'error.log', level: 'error' }));
  logger.add(new winston.transports.File({ filename: 'combined.log' }));
}

if (NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

const stream = {
  write: message => logger.info(message)
};

export const middleware = morgan('combined', { stream });

export default { logger, middleware };
