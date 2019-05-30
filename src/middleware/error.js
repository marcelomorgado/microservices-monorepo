import { Errors } from '../../packages/common/dist';
import { logger } from './logger';

const { ClientError, HTTP404Error, ServerError } = Errors;

const { env } = process;
const { NODE_ENV } = env;

export const handle404Error = () => {
  throw new HTTP404Error();
};

export const handleClientError = (error, req, res, next) => {
  if (error instanceof ClientError) {
    const { status } = error;
    logger.debug(error.toJson());
    return res.status(status).json(error.toJson());
  }

  return next(error);
};

// eslint-disable-next-line no-unused-vars
export const handleServerError = (error, req, res, next) => {
  const error500 = new ServerError();
  const { status } = error500;

  logger.error(error);

  if (NODE_ENV === 'production') {
    return res.status(status).json(error500.toJson());
  }

  return res.status(status).send(error.stack);
};

export default [handle404Error, handleClientError, handleServerError];
