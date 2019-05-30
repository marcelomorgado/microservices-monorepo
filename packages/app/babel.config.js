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
  // const plugins = ['@babel/plugin-transform-runtime'];

  const plugins = [];

  return {
    presets,
    plugins
  };
};
