const fs = require('fs'); //came to node documentation
const colors = require('colors');

let dataTable = '';
let listTable = (base, limit) => {
    console.log('================='.green);
    console.log(`=== table ${base} ===`.green);
    console.log('================='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limit)) {
            reject(`The entered value ${base} is not number`);
            return;
        }
        for (let i = 1; i <= limit; i++) {
            dataTable += `${base} * ${i} = ${base*i}\n`;
        }
        if (!dataTable) reject('the table was not created')
        else
            resolve(dataTable);
    });
}

let createFile = (base, limit) => {
    console.log('================='.green);
    console.log(`=== table ${base} ===`.green);
    console.log('================='.green);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`The entered value in the base (${base}) is not number`);
            return;
        } else if (!Number(limit)) {
            reject(`The entered value in the limit (${limit}) is not number`);
            return;
        }

        let dataFile = '';

        for (let i = 1; i <= limit; i++) {
            result = base * i;
            dataFile += `${base} * ${i} = ${result}\n`;
        }

        const data = new Uint8Array(Buffer.from(dataFile));
        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tables/table-${base}.txt`)
                //console.log('The file has been saved!');
        });
    });
}

module.exports = {
    createFile,
    listTable
}