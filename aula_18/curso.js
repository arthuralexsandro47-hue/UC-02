import PromptSync from "prompt-sync";


const input = PromptSync()
const vaga = Number(input("Matriculados:"))

console.log("Existe vaga disponível:", vaga<30)
