module.exports = {
  entry: './src/index.js', 
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },
};