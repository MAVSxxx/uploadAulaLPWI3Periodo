/*
Crie um array com os números entre 0 e 150. Não pode utilizar, por exemplo,
const numeros = [0, 1, 3, 4, 5]. Utilize uma estrutura de repetição para gerar o
array e mais o comando push.
Imprima:
• Array gerado
• somatório dos números na posicão par é xxxxx
• A média dos números na posição impar é xxxxx
*/

function generateRange(n) {
    let range = [];
    for (let i = 0; i < n; i++) range[i] = i + 1;
    return range;
}
console.log(generateRange(150));
let pares = generateRange(150).filter(n => n % 2 ==0)
let impares = generateRange(150).filter(n => n % 2 == 1)
somatorioPares = pares.reduce((total, n) => total += +n, 0)
console.log(`A soma dos númeors pares é: ${somatorioPares}`)
mediaImpares = impares.reduce((total, n) => (total += Number(n)) /impares.length)
console.log(`A media dos númeors impares é: ${mediaImpares}`)
