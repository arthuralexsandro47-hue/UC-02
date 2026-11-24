import PromptSync from "prompt-sync";

const input = PromptSync()
const idade = (Number(input("Insira a idade:")))

console.log("Idade:", idade)
console.log("Idade mínima atendida:", idade>=12)