const path = require("path");

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "plus.unsplash.com",
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src/components"
    );
    return config;
  },
};
