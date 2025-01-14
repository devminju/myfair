const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
      "@common": path.resolve(__dirname, "src/components/common"),
      "@features": path.resolve(__dirname, "src/components/features"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@definitions": path.resolve(__dirname, "src/components/definitions"),
      "@recoil": path.resolve(__dirname, "src/components/recoil"),
      "@hooks": path.resolve(__dirname, "src/components/hooks"),
      "@utils": path.resolve(__dirname, "src/components/utils"),
    };

    return config;
  },
};
