import { BadRequestError } from '../../../dist/common/errors';

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
