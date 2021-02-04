// Requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, listar, hasta)=> {

  return new Promise((resolve, reject)=>{
    let salida = '';
    let consola = '';

    //let path =`${__dirname}\\bases.txt`;
    for(let i = 1; i <= hasta; i++){
      salida += `${base} X ${i} = ${base * i} \n`;
      consola += `${base} ${colors.green('X')} ${i} ${colors.green('=')} ${base * i} \n`;
    }

    if(listar){
      console.log('===================='.green)
      console.log('     Tabla del'.green, colors.blue(base))
      console.log('===================='.green)
      console.log(consola);
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, salida, (err)=> {
        if(err)
          reject(err);
        else
          resolve(`tabla-${base}.txt`);
    });
  })
}
module.exports = {
   crearArchivo: crearArchivo
}