import { Router } from 'express';
import { AssetNotFound } from './errors';
import { getAllAssets, getAssetBySymbol } from './db';

const router = Router();

router.get('/assets', async (req, res) => {
  const asset = await getAllAssets();
  res.json(asset);
});

router.get('/assets/:symbol', async (req, res) => {
  const { params } = req;
  const { symbol } = params;

  const asset = await getAssetBySymbol(symbol);

  if (!asset) {
    throw new AssetNotFound();
  }

  return res.json(asset);
});

module.exports = router;
