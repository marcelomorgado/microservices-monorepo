import { Router } from 'express';
import { AssetNotFound } from './errors';
import { getAllPrices, getPriceBySymbol } from './db';

const router = Router();

router.get('/prices', async (req, res) => {
  const asset = await getAllPrices();
  res.json(asset);
});

router.get('/prices/:symbol', async (req, res) => {
  const { params } = req;
  const { symbol } = params;

  const asset = await getPriceBySymbol(symbol);

  if (!asset) {
    throw new AssetNotFound();
  }

  return res.json(asset);
});

module.exports = router;
