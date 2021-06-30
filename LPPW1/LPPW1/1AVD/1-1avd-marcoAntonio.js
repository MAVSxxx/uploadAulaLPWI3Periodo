/*
1. Crie uma função para gerar números aleatórios entre 100 e 200. Invoque a
função 20 vezes (utilize uma estrutura de repetição) para gerar os números e
eles serem armazenados num array, utilize o comando push para adicionar os
números no array. Imprima:
• array gerado
• somatório de todos os numeros do array
• somatório dos numeros pares do
• somatório dos numeros ímpares
• A media dos numeros pares
• A media dos números impares
*/

let valor = i
for (i = 0; i < 20; i++)
{
    const valor = Math.random() * (200 -100) +100 
    console.log(Math.floor(valor))  
}
console.log(valor)