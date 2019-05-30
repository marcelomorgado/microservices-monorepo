const api = supertest(`http://localhost:3000`);

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
});
