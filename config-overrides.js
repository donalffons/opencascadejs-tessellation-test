const path = require('path');

module.exports = function override(config, env) {
  const oneOfRule = config.module.rules.find(k => k.oneOf !== undefined);
  oneOfRule.oneOf = [
    {
      test: /\.(wasm)$/,
      type: "javascript/auto",
      loader: "file-loader",
    },
    ...oneOfRule.oneOf,
  ];
  return config;
}
