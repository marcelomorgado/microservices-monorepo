module.exports = api => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true
        }
      }
    ]
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
};
