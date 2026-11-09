// operadores aritiméticos - ok
//console.log("A soma de 2 + 2 é igual a:", 2 + 2);
//console.log("A múltiplicação de 5 x 60 é igual a:", 5 * 60);

// tipos de variaveis

// const consumo = 200
// const preco = 0.77
// const total = consumo * preco

// console.log(total)



// const nota1 = 70
// const nota2 = 50
// const media = (nota1+nota2)/2

// console.log("A média das notas é:", media)





// const produto1 = 99
// const produto2 = 22
// const produto3 = 44
// const nota = produto1+produto2+produto3

// console.log("Valor total da compra é: R$", nota)


const peso = 79
const altura = 1.82
const imc = peso / (altura * altura)

console.log("O IMC é:", imc)



console.log(`Com o peso igual a ${peso}kg e a altura igual a ${altura}m, o IMC será igual a: ${imc}`)
if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal")
} else {
    console.log("Acima do peso")
}