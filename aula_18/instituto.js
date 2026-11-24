import PromptSync from "prompt-sync";


const input = PromptSync()
const valor = Number(input("Insira o valor arrecadado:"))

console.log("Total arrecadado:", valor);
console.log("Maior que a meta:", valor > 5000);
console.log("Menor que a meta:", valor < 5000);
console.log("Igual à meta:", valor === 5000);
