const {crearArchivo} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs')
let colors = require('colors');

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then((archivo)=> console.log(`Archivo creado ${archivo}`))
    .catch(err=> console.log(err));
