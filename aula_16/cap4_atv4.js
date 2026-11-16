import PromptSync from "prompt-sync";


const input = PromptSync()

const kits = Number(input("Insira o número de kits:"))
const equipes = Number(input("Insira o número de equipes:"))


const porEquipe = Math.floor(kits/equipes);
const resto = kits%equipes

console.log("Quantidade de kits:", kits)
console.log("Quantidade de equipes:", equipes)
console.log("Kits por equipe:", porEquipe)
console.log("Kits restantes:", resto)
