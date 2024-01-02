module.exports = {
  reactStrictMode: true,
  assetPrefix: ".",
  async redirects() {
    return [
      {
        source: '/photography',
        destination: 'https://www.flickr.com/photos/198757426@N02',
        permanent: true,
      },
    ]
  },
};
