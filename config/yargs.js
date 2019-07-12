const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Show in console the multiply table', opts)
    .command('create', 'generate a file with multiply table', opts)
    .help()
    .argv;

module.exports = {
    argv
}