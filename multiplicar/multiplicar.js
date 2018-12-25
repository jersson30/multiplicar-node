const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {
    //Listar tamblas validando el limite.
    console.log('=================================='.green);
    console.log(`TABLA DE MULTIPLICAR DEL ${base}`.green);
    console.log('=================================='.green);
    if ((!Number(base))) {
        console.log('Por favor validar los datos ingresado que sean numericos.'.red);
        return;
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${ i } = ${base*i}`);
    }
    //resolve(data);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        if (!Number(base)) {
            reject(`EL valor '${base}' introducido no es un numero.`.green);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${ i } = ${base*i} \n`;
            //console.log(`${base} * ${ i } = ${base*i} `);
        }
        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}