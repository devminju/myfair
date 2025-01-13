const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components/components"),
      "@features": path.resolve(__dirname, "src/components/features"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@definitions": path.resolve(__dirname, "src/components/definitions"),
      "@recoil": path.resolve(__dirname, "src/components/recoil"),
    };

    return config;
  },
};
