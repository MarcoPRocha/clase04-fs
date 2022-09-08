/*Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
a) abra una terminal en el directorio del archivo y ejecute la instruccion npm init -y
    esto creará un archivo eespecial(lo veremos mas adelante) de nombre package.json
b) lea el archivo package.json y declare un objeto con el siguiente formato y datos:
    const info = {
        contenidoStr : (contenido del archivo leido en formato string),
        contenidoObj: (contenido del archivo leido en formato objeto),
    }
c) muestre por consola el objeto info luego de leer el archivo
d) guardar el objeto info en un archivo llamado info.txt dentro de la misma crpta package.json
e) incluir el manejo de errores (con throw new error)
*/

const fs = require ('fs')

try {
    fs.readFile('package.json', 'utf-8', (err, data) => {
        if (err) throw 'error'
        const info = {
            contenidoStr: data,
            contenidoObj: JSON.parse(data)
        }
        info.contenidoObj.author = "Marco Rocha" //asi modifico la linea de autor en package
        fs.writeFile('packge.json', JSON.stringify(info.contenidoObj, null, 2), err => {
            if (err) throw 'error'
        })
        
    })
}catch (err) {
      console.log(err.message)
}