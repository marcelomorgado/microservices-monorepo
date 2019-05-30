const { env } = process;
const { APP_PORT } = env;
const api = supertest(`http://localhost:${APP_PORT}`);

describe('Integration tests', () => {
  it('should get all assets', async () => {
    const expected = [{ symbol: 'BTC', name: 'Bitcoin' }, { symbol: 'ETH', name: 'Ethereum' }];

    const res = await api
      .get('/assets')
      .expect('Content-Type', /json/)
      .expect(200);

    const { body: assets } = res;

    expect(assets).to.deep.equal(expected);
  });

  it('should get all prices', async () => {
    const expected = [{ symbol: 'BTC', priceUsd: '10000' }, { symbol: 'ETH', priceUsd: '1000' }];

    const res = await api
      .get('/prices')
      .expect('Content-Type', /json/)
      .expect(200);

    const { body: assets } = res;

    expect(assets).to.deep.equal(expected);
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
