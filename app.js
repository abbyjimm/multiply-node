const argv = require('./config/yargs').argv;
const colors = require('colors');

const { createFile, listTable } = require('./multiply/multiply');
let command = argv._[0];
switch (command) {
    case 'list':
        listTable(argv.base, argv.limit)
            .then(data => console.log(`Table of ${argv.base} with llimit of ${argv.limit} \n${data}`))
            .catch(e => console.log(e));
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log('Created file: ' + colors.green(file)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('the command is not recognising')
}

console.log(argv);
//Requiring modules in Node.js
//const fs = require('fs'); //came to node documentation

/*const fs = require('express');//package to install, does not to node documentation
const fs = require('./file');//files that I created*/
//let argv2 = process.argv;

//console.log('Limit', argv.limit);
//console.log(argv2);
//let parameter = argv[2];
//let base = parameter.split('=')[1];

/*createFile(base)
    .then(file => console.log(`Created file: ${file}`))
    .catch(e => console.log(e));*/