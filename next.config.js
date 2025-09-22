const path = require("path");

module.exports = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  i18n: {
    locales: ['jp', 'en'],
    defaultLocale: 'jp',
  },
  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "plus.unsplash.com",
      "cdn.sanity.io",
      "embperujapan.org",
      "cdn.pixabay.com",
      "res.cloudinary.com",
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src/components"
    );
    config.resolve.alias["@src"] = path.join(
      __dirname,
      "src"
    );
    return config;
  },
};
