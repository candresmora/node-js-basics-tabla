
const { crearArchivo } = require('./helpers/multiplicador');
const argv = require('./config/yargs')

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creada') )
    .catch( err => console.error(err) )


