const inputDecimal = document.getElementById("decimal")
const inputBinario = document.getElementById("binario")
const btnConvert = document.getElementById("converter")


// CALCULO DE DECIMAL PARA BINARIO
/* btnConvert.addEventListener('click', function(){
    let decimal = parseInt(inputDecimal.value)
    let binario = decimal.toString(10)
    inputBinario.value = binario 
}) */

// CALCULO DE BINARIO PARA DECIMAL
btnConvert.addEventListener('click', function(){
    let array = inputBinario.value.split("")
    let arrayBinario = array.reverse()
    var conversaoDecimal = arrayBinario.reduce(function(acumulador, binario, index){
        var exponencial = Math.pow(2, index)
        var resultado = binario * exponencial
        return acumulador += resultado
    }, 0)
    inputDecimal.value = conversaoDecimal
})

