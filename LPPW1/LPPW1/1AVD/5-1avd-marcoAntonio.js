 /*
Crie um programa para imprimir os números ímpares entre 25 e 5. Utilize o
while e for. No final imprima a soma destes números.
*/

const arrayNum = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
let i = 0
while (i < arrayNum.length)
{
    let impares = arrayNum[i] % 2 == 1 
    console.log(impares)
    i++
}





