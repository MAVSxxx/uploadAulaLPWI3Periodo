/*
1 - Crie uma função para receber 10 números quaisquer. 
Na função os números deverão ser convertidos para array. 
Imprima os números pares, ímpares, 
o somatório dos números pares, ímpares, de todos os números, 
e os dois primeiros e dois últimos do array.
*/

const impressaoDeNumeros = (num) => 
{
    console.log(num)
    numerosArray = num.split(',')
    console.log(numerosArray)
    let pares = numerosArray.filter(n => n % 2 ==0)
    console.log("Pares: ", pares)
    let impares = numerosArray.filter(n => n % 2 == 1)
    console.log("Impares: ", impares)
    totalPares = pares.reduce((total, n) => total += +n, 0)
    console.log(totalPares)
    totalImpares = impares.reduce((total, n) => total += Number(n), 0)
    console.log(totalImpares)
    totalNumeros = numerosArray.reduce((total, n) => total += +n, 0)
    console.log(totalNumeros)
    console.log(numerosArray[0], numerosArray[1])
    let totalElementos = numerosArray.length
    console.log(numerosArray[totalElementos -2], numerosArray[totalElementos -1])
}

impressaoDeNumeros('1,2,3,4,5,6,7,8,9,10')

/*
2-Crie uma função para receber 10 palavras aleatórias. 
Na função as palavras deverão ser convertidas para array. 
Imprima as palavras e o seu respectivo tamanho do lado, imprima todas as 
palavras com mais de 9 caracteres e quantidade. Imprima todas as
palavras com menos de 6 caracteres e a quantidade.
*/
const palavras = palavra => {
    console.log(palavra)
    const palavrasArray = palavra.split(',')
    console.log(palavrasArray)
    palavrasArray.forEach(palavra => 
    {
        console.log(`A palavra ${palavra} possui ${palavra.length} caracteres `)
    })
    let palavrasMaisNoveCaracteres = palavrasArray.filter(palavra =>
    palavra.length > 6)
    console.log('Palavra com mais de 6 caracteres: ', palavrasMaisNoveCaracteres)
    console.log('Quantidade de palavras com mais de 6 caracteres',
    palavrasMaisNoveCaracteres.length)
}

palavras('js,react,node,vue,angular,postgres,mongodb,redux,api,typescript')