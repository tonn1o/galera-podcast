module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 3 versions',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    })
  ]
};
