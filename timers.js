
let counter = 0;
let timer = setInterval (() => {
    if (counter<=20){
        console.log("Coder")
        counter++
    } else {
         clearInterval(timer)
    }
}, 200)

