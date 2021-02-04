const argv = require('yargs')
              .options('b',{
                alias: 'base',
                type:'number',
                demandOption:true,
                describe: 'Es la base de Multiplicar'
              }).option('l',{
                alias:'listar',
                type:'boolean',
                default:false,
                describe: 'Muestra la tabla en la consola'
              }).option('h', {
                alias: 'hasta',
                type:'number',
                default:12,
                describe:'Indica el limite de la tabla'
              })
              .check((argv, options)=>{
                if (isNaN(argv.base)) {
                  throw "La base solo permite numeros";
                }
                if (isNaN(argv.hasta)) {
                  throw "El parametro hasta solo permite numeros";
                }
                return true // tell Yargs that the arguments passed the check
              })
              // .command('listar','Imprime en consola la tabla de Multiplicar',{
              //   base: {
              //     demand: true,
              //     alias: 'b'
              //   },
              //   limite:{
              //     alias: 'l',
              //     default: 5
              //   }
              // })
              .help()
              .argv;

module.exports = argv;
