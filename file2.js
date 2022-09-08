let fs = require ('fs')

/*fs.readFile ('text.txt', (err, data) => {
    if (err) {
        console.log(err.message)
    } else {
        
    console.log(data.toString())
    }
})
*/
/*
fs.writeFile('clase4.txt', 'Hello world', err => {
    if (!err) {
        fs.readFile ('clase4.txt', (err,data) => {
            if (!err) console.log(data.toString())
        })
    }
})
*/

/*
fs.appendFile ('clase4.txt','\nSame data', err => {
    if (!err) console.log('Sucess')
})

*/

fs.unlink ('fyh.txt', err => { //la accion a hacer
    if (!err) console.log("Deleted!!") //lo que se mostrará en consola
})