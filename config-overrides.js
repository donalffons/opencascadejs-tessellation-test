const path = require('path');

module.exports = function override(config, env) {
  const oneOfRule = config.module.rules.find(k => k.oneOf !== undefined);
  oneOfRule.oneOf = [
    {
      test: /\.worker\.(js|ts)$/i,
      use: [{
        loader: 'comlink-loader',
        // options: {
        //   singleton: true
        // }
      }],
    },
    {
      test: /\.(wasm)$/,
      type: "javascript/auto",
      loader: "file-loader",
      options: {
        name: '[name]-[contenthash].[ext]',
      }
    },
    ...oneOfRule.oneOf,
  ];
  return config;
}
