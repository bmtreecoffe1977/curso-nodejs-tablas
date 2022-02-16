const { argv0 } = require("process");
const { numeroMultiplicar } = require("./helpers/multiplicar");
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();
/** 
const base = 2
const [, , arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('=');
*/

numeroMultiplicar(argv.i, argv.l, argv.f)
.then(nombreArchivo => console.log(nombreArchivo.rainbow))
.catch(err => console.log(err));
