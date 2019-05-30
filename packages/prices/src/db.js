const assets = [{ symbol: 'BTC', name: 'Bitcoin' }, { symbol: 'ETH', name: 'Ethereum' }];

export const getAllAssets = async () => {
  return assets;
};

export const getAssetBySymbol = async symbol => {
  return assets.find(a => a.symbol === symbol);
};

export default { getAllAssets };
