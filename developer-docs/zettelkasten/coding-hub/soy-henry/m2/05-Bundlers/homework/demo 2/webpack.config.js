module.exports={
    entry: './index.js', // ruta del punto de arranque de nuestro programa
    output: {
        path: __dirname, //el path absoluto donde queremos que el output sea colocado
        filename: 'bundle.js' // el nombre del archivo que va a contener nuestro output
    }
}