const bunyan = require('bunyan');

///////////////////////////////////////////////////

module.exports = bunyan.createLogger({
  name: 'cdt-api-server',
  streams: [
    {
      level: 'trace',
      stream: process.stdout,
      color: 'black',
    },
    // {
    //   level: 'debug',
    //   stream: process.stdout,
    //   color: 'blue',
    // },
    // {
    //   level: 'info',
    //   stream: process.stdout,
    //   color: 'cyan',
    // },
    {
      level: 'error',
      stream: process.stderr,
      color: 'red'
    },
    {
      level: 'warn',
      stream: process.stderr,
      color: 'magenta'
    }
  ]
});