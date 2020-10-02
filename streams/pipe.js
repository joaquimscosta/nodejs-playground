const fs = require("fs");
const zlib = require("zlib");

const readable = fs.createReadStream(`${__dirname}/greet.txt`);
const writable = fs.createWriteStream(`${__dirname}/greetcopypipe.txt`);
readable.pipe(writable);

const compressed = fs.createWriteStream(`${__dirname}/greet.txt.gz`);
const gzip = zlib.createGzip();
readable.pipe(gzip).pipe(compressed);
