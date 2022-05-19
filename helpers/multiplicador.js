const fs = require('fs');
const colors = require('colors');
colors.enable();

const crearArchivo = async( base, listar = false, hasta ) => {
    
    try {
        
        let salida = '';
        let consola = '';
        let limite = hasta;
        for( let i = 1; i <= limite; i++ ) {
            resultado = base * i;
            salida += `${ base } x ${ i } = ${ resultado }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ resultado }\n`;
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)

        if ( listar ) {
            console.log('======================'.green);
            console.log('    Tabla del:'.green ,colors.green(base));
            console.log('======================'.green);
            console.log(consola);
        }

        return `tabla-${ base }.txt`;

    } catch (err) { 
        throw err; 
    }
    
}

module.exports = {
    crearArchivo : crearArchivo
}
