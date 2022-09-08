/**Desarrolla una funcion "mostrarLetras" que reciba un string como parámetro y permita mostrar una vez por segundo
cada uno de sus caracteres.
Al finalizar, debe invocar a la siguiente función que se le pasa también como parámetro: const fin = () => clg('termine')
Realizar tres llamdas a "mostrarLetras" con mensaje '!hola!' y demoras de 0,250 y 500 ms verificando que los mensajes 
de salida se intercalen.*/

const fin = () => console.log('terminé')

const mostrarLetras = (cadena, callback)=> {   
    let index = 0;
    const timer = setInterval(() => {
            if (index <cadena.length){
                console.log(cadena[index])
                index++ 
            } else {
                clearInterval(timer) //para que se detenga
                callback() 
            }
    }, 1000)
}


setTimeout (() => mostrarLetras("hola",fin), 0)
setTimeout (() => mostrarLetras("hola",fin), 250)
setTimeout (() => mostrarLetras("hola",fin), 500)