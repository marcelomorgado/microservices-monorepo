const prices = [{ symbol: 'BTC', priceUsd: '10000' }, { symbol: 'ETH', priceUsd: '1000' }];

export const getAllPrices = async () => {
  return prices;
};

export const getPriceBySymbol = async symbol => {
  return prices.find(p => p.symbol === symbol);
};
