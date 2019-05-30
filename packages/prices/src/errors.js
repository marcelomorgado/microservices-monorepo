import { Errors } from 'common';

const { BadRequestError } = Errors;

export class AssetNotFound extends BadRequestError {
  constructor() {
    super({
      code: 'ASSET_01',
      message: 'No asset found with that symbol.',
      field: 'symbol'
    });
  }
}

export default { AssetNotFound };
