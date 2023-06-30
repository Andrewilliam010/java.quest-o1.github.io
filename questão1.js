function calculariMC( peso, altura){
    altura = altura /100

    var imc =peso/(altura * altura)

    return imc.toFixed(2)
}
let peso = 56

altura = 170

let imc = calculariMC(peso, altura)

console.log("O IMC e: "+ imc)
