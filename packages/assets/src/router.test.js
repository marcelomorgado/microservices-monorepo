import { appToTest } from 'test-helpers';
import router from './router';
import { AssetNotFound } from './errors';

const app = appToTest(router);
const assets = [{ symbol: 'BTC', name: 'Bitcoin' }, { symbol: 'ETH', name: 'Ethereum' }];

describe('/assets route', () => {
  describe('GET /', () => {
    it('should get a list of all assets', async () => {
      await supertest(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, assets);
    });
  });

  describe('GET /{symbol}', () => {
    it('should get an asset', async () => {
      const [asset] = assets;
      const { symbol } = asset;

      const res = await supertest(app)
        .get(`/${symbol}`)
        .expect('Content-Type', /json/)
        .expect(200);
      const { body } = res;
      expect(body).to.deep.equal(asset);
    });

    it.only('respond with not found error', async () => {
      const notExistentSymbol = 'XYZ';

      const res = await supertest(app)
        .get(`/${notExistentSymbol}`)
        .expect('Content-Type', /json/)
        .expect(400);

      const expected = new AssetNotFound().toJson();

      const { body: errMsg } = res;
      expect(errMsg).to.deep.equal(expected);
    });
  });
});
