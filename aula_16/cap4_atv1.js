import PromptSync from "prompt-sync";



const input = PromptSync()
const peso = Number(input("Insira o peso(KG):"))
const altura = Number(input("Insira a altura(Metros):"))

const imc = peso/(altura**2)

console.log("Peso(kg):", peso)
console.log("Altura(m):", altura)
console.log("O IMC é:", imc.toFixed(2))
