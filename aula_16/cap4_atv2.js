import PromptSync from "prompt-sync";


const input = PromptSync()
const valorCompra = Number(input("Insira o valor da compra:"))
const valorPago = Number(input("Insira o valor pago:"))


const troco = valorPago-valorCompra

console.log("Valor da compra:", valorCompra)
console.log("Valor recebido:", valorPago)
console.log("Troco: R$", troco.toFixed(2))