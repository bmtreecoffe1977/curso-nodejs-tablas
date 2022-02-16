const fs = require('fs');
const colors = require('colors');

const numeroMultiplicar = async (inicio = 1, listar = false, final = 1) => {
    try {
        let data = '';
        for (let i = inicio; i <= final; i++) {
            data += `Tabla del No. ${i}\n`;
            for (let j = 1; j <= 10; j++) {
                data += `${i} x ${j} = ${i * j}\n`;
            }
            data += '\n';
        }

        if (listar) {
            console.log('=========================================='.green);
            console.log('Tabla de Multiplicar del'.green, inicio,'al',final );
            console.log('=========================================='.green);
            console.log(data);
        }

        fs.writeFileSync(`./doc/Tabla-del-${inicio}-${final}.txt`, data);
        return `Archivo: (Tabla-del-${inicio}-${final} !Creado con Exito¡`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    numeroMultiplicar
}

