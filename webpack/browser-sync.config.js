module.exports = {
  host: 'localhost',
  port: 4000,
  open: false,
  proxy: {
    target: 'http://localhost:3100/'
  },
  plugins: [
    {
      module: 'bs-html-injector',
      options: {
        files: ['src/**/*.pug']
      }
    }
  ]
}
