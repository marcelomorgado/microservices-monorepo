import { appToTest } from 'test-helpers';
import routes from './routes';
import { AssetNotFound } from './errors';

const app = appToTest(routes);
const prices = [{ symbol: 'BTC', priceUsd: '10000' }, { symbol: 'ETH', priceUsd: '1000' }];

describe('PRICES', () => {
  describe('GET /prices', () => {
    it('should get all prices', async () => {
      await supertest(app)
        .get('/prices')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, prices);
    });
  });

  describe('GET /prices/{symbol}', () => {
    it("should get an asset's price", async () => {
      const [asset] = prices;
      const { symbol, priceUsd: expectedPrice } = asset;

      const res = await supertest(app)
        .get(`/prices/${symbol}`)
        .expect('Content-Type', /json/)
        .expect(200);
      const { body: bitcoin } = res;
      const { priceUsd } = bitcoin;
      expect(priceUsd).to.deep.equal(expectedPrice);
    });

    it('respond with not found error', async () => {
      const notExistentSymbol = 'XYZ';

      const res = await supertest(app)
        .get(`/prices/${notExistentSymbol}`)
        .expect('Content-Type', /json/)
        .expect(400);

      const expected = new AssetNotFound().toJson();

      const { body: errMsg } = res;
      expect(errMsg).to.deep.equal(expected);
    });
  });
});
