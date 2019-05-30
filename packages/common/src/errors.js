export class AppError extends Error {
  constructor({ code, message, field, status }) {
    super(message);
    this.code = code;
    if (field) this.field = field;
    this.status = status;
  }

  toJson() {
    const { code, message, field, status } = this;
    if (field) return { code, message, field, status };
    return { code, message, status };
  }
}

export class ServerError extends AppError {
  constructor() {
    super({
      code: 'ERR_500',
      message: 'Internal Server Error.',
      status: '500'
    });
  }
}

export class ClientError extends AppError {}

export class HTTP404Error extends ClientError {
  constructor() {
    super({
      code: 'ERR_404',
      message: 'Method not found.',
      status: '404'
    });
  }
}

export class BadRequestError extends ClientError {
  constructor(error) {
    super({
      status: '400',
      ...error
    });
  }
}

export default { HTTP404Error, BadRequestError, ServerError, ClientError };
