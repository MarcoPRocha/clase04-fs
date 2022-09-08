
//yellow está en argv2 y 9 en argv 3, esto en node
console.log(process.argv)

let fs = require("fs")
let data = `{"${process.argv[2]}" : ${process.argv[3]}}` 
    fs.writeFile('data.json', JSON.stringify(JSON.parse(data), null, 2), err => { //esto crea el archivo
        if (!err) {
            console.log("File Created dogggggi")
        }
    })