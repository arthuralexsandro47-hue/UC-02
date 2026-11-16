import PromptSync from "prompt-sync";

const input = PromptSync()
const km = Number(input("Quilômetros percorridos:"))
const litros = Number(input("Litros consumidos:"))

const consumo = km/litros

console.log("Quilômetros percorridos:", km)
console.log("Litros consumidos:", litros)
console.log("Consumo médio:", consumo.toFixed(2),"km/L")