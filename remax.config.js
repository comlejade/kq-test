const less = require('@remax/plugin-less')

module.exports = {
  plugins: [
    less({
      lessOptions: {
        modifyVars: { '@brand-primary': '#2780d9' },
        javascriptEnabled: true
      }
    })
  ]
};
