import PromptSync from "prompt-sync";


const input = PromptSync()
const placa = input("Digite a placa:")
const distancia = Number(input("Digite a distância(Em Km):"))

console.log("Placa:", placa)
console.log("Distância(km):", distancia)
console.log("Veículo:", placa)
console.log("Distância:", distancia,"km")
console.log(Number.isFinite(distancia))