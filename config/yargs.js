
const argv = require('yargs')
.option('i', {
    alias: 'inicio',
    type: 'number',
    demandOption: true,
    describe: 'Numero inicial para las tablas de Multiplicar',
    default: 1

}) 
.option('l',{
    alias: 'Listas',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra el listado de la Tabla'
})
.option('f',{
    alias: 'Final',
    type: 'number',
    demandOption: true,
    describe: 'Numero final para las tablas de Multiplicar',
    default: 1
}) 
.check((argv, option) => {
    if(isNaN(argv.i) || isNaN(argv.f)) {
        throw 'La base debe ser un numero entero'
    }   
    return true                 
})
.argv;

module.exports = argv;