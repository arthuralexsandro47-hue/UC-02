import PromptSync from "prompt-sync";


const input = PromptSync()
const comprimento = Number(input("Insira o comprimento(m):"))
const largura = Number(input("Insira a altura(m):"))

const area = comprimento*largura

console.log("Comprimento(m):", comprimento)
console.log("Largura(m):", largura)
console.log("Área do Piso:", area.toFixed(2),"m²")