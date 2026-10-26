const path = require("path");

module.exports = {
  redirects() {
    return [
      { source: '/news', destination: '/investing-in-peru/news', permanent: true },
      { source: '/news/:year([0-9]{4})', destination: '/investing-in-peru/news/:year', permanent: true },
    ];
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  i18n: {
    locales: ['jp', 'en'],
    defaultLocale: 'jp',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'embperujapan.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'asset.cloudinary.com',
      },
    ],
  },
  turbopack: {},
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
