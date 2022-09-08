//const fs = require ('fs')

//fs.writeFileSync('clase4.txt', 'Mi segunda vez escribiendo en un archivo') //esto crea el archivo clase4 haciendo node file1.js

/*
try {
    let contenido = fs.readFileSync('clase4.txt') 
    console.log(contenido, toString()) //toString es necesario para codificar el contenido
} catch (err){
    fs.writeFileSync('clase4.txt', 'Ahora si existe')
}
*/

//fs.appendFileSync ('Clase4.txt', 'texto nuevo agregado') //appendfilesync es para agregar texto a un archivo ya creado

fs.unlinkSync('clase4.txt') //unlinksync borra el archivo