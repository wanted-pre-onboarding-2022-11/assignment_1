const path = require("path");

module.exports = function override(config) {
  /* eslint-disable no-param-reassign */
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@": path.resolve(__dirname, "src"),
      "@components/*": path.resolve(__dirname, "src/components/*"),
      "@pages/*": path.resolve(__dirname, "src/pages/*"),
      "@routes/*": path.resolve(__dirname, "src/routes/*"),
      "@hooks/*": path.resolve(__dirname, "src/hooks/*"),
      "@styles/*": path.resolve(__dirname, "src/styles/*"),
      "@apis/*": path.resolve(__dirname, "src/apis/*"),
      "@utils/*": path.resolve(__dirname, "src/utils/*"),
    },
  };
  return config;
};
