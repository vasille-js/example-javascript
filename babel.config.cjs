module.exports = function (api) {
  api.cache(true);

  const presets = [];
  const plugins = [
    "@babel/plugin-syntax-jsx",
    ["vasille", {devMode: process.env.NODE_ENV !== "production"}]
  ];

  return {
    presets,
    plugins,
    sourceMaps: "inline",
  };
}
