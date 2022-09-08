/* Realiza un programa que:
a) guarda en un archivo llamado fyh.txt la fecha y hora actual
b) lea nuestro propio archivo de programa y lo muestre por consola
c) incluya el manejo de errores try catch (progresando las excepciones con throw new error)
*/

const fs = require ('fs')

try {
    fs.writeFileSync ('fyh.txt', new Date().toLocaleString()); //punto A
    let data = fs.readFileSync('fyh.txt', 'utf-8') //punto b
    console.log(data)
}catch (err){
    throw new Error (err.message)
}

    