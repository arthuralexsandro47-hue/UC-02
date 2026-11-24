

const codigo = "0012"
const num = 12

console.log("Código textual:", codigo);
console.log("Número:", num);
console.log("Igualdade não restrita(==):", codigo == num);
console.log("Igualdade restrita(===):", codigo === num);
console.log(`Comparação adicional: "12" == 12 ->`, codigo == num);
console.log(`Comparação adicional: "12" === 12 ->`, codigo === num);


// A comparação estrita é apropriada, pois não compara apenas o se a variável é igual em valor, como também em tipo(string, number, bolean).
