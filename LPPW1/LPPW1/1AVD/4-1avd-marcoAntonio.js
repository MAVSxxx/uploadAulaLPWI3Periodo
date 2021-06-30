/*
Crie um array com os seguintes números: 4, 9, 16, 25, 36, 49, 81, 100. Gere
um novo array com a raiz quadrada deste número. Imprima os 2 arrays e a
seguinte mensagem:
No array da raiz quadrada, todos os números são maiores que 10 ou No array
da raiz quadrada dos números, nem todos os números são maiores que 10.
*/

const arrayNum = [4, 9, 16, 25, 36, 49, 81, 100]
console.log(arrayNum)
const raizDeNum = arrayNum.map (n => Math.sqrt(n))
console.log(`A raiz quadrada dele é :${raizDeNum}`)
if (raizDeNum.forEach > 10)
{
    console.log("No array da raiz quadrada, todos os números são maiores que 10")
}
else
{
    console.log("No array da raiz quadrada dos números, nem todos os números são maiores que 10.")
}