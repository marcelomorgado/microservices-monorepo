const { env } = process;
const { APP_PORT, ROUTES } = env;
const api = supertest(`http://localhost:${APP_PORT}`);
const routes = ROUTES.split(' ');

describe('Integration tests', () => {
  describe('Routes', () => {
    // eslint-disable-next-line func-names
    it('should get all assets', async function() {
      if (!routes.includes('assets')) this.skip();

      const expected = [{ symbol: 'BTC', name: 'Bitcoin' }, { symbol: 'ETH', name: 'Ethereum' }];

      const res = await api
        .get('/assets')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body: assets } = res;

      expect(assets).to.deep.equal(expected);
    });

    // eslint-disable-next-line func-names
    it('should get all prices', async function() {
      if (!routes.includes('prices')) this.skip();

      const expected = [{ symbol: 'BTC', priceUsd: '10000' }, { symbol: 'ETH', priceUsd: '1000' }];

      const res = await api
        .get('/prices')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body: assets } = res;

      expect(assets).to.deep.equal(expected);
    });
  });

  it('should get not found error', async () => {
    const expected = { code: 'ERR_404', message: 'Method not found.', status: '404' };

    const res = await api
      .get('/not/found')
      .expect('Content-Type', /json/)
      .expect(404);

    const { body: error } = res;

    expect(error).to.deep.equal(expected);
  });
});
