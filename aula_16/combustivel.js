import PromptSync from "prompt-sync";


const input = PromptSync()


const motorista = input("Digite o nome do(a) motorista:")
const distancia = Number(input("Digite a distância da viagem em quilômetros:"))
const consumo = Number(input("Digite o consumo médio do veículo em Km/L:"))
const preco = Number(input("Digite o preço por litro:"))


const litrosNecessarios = distancia/consumo
const custoTotal = litrosNecessarios*preco

console.log("Motorista:", motorista)
console.log("Distância(km):", distancia)
console.log("Consumo médio (km/L):", consumo)
console.log("Preço por litro:", preco)
console.log("Combustível necessário (L):", litrosNecessarios)
console.log("Custo estimado:", custoTotal)
