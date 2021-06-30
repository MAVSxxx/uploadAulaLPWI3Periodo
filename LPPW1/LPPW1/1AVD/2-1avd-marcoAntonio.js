/*
Crie uma array com 6 objetos contendo os atributos matricula, nome,
funcao, salario. Todo o objeto deve conter somente 3 funções diferentes, por
exemplo, analista junior, analista pleno, gerente de ti, professor, analista sênior,
coordenador e etc. Percorra este array e para cada objeto calcule o reajuste de
10% sobre o salário. Imprima o seu nome é xxxx, sua função é xxxx, seu salário
é 9999, seu reajuste foi de 9999 e o novo salário será de 99999 (salário + valor
do reajuste). No final imprima o somatório do salário e reajuste por função.
Exemplo: O somatório do salário da função xxx é 9999. O somatório do
reajuste da função xxxx é 9999.
*/
let colaboradores = 
[
    {matricula: 2004, nome: "José", funcao: "Operador", salario: 1400},
    {matricula: 1050, nome: "Rose", funcao: "Gerente", salario: 1750},
    {matricula: 1200, nome: "Thales", funcao: "Operador", salario: 1450},
    {matricula: 2074, nome: "Regina", funcao: "Operador", salario: 1400},
    {matricula: 1420, nome: "Diego", funcao: "Cordenador", salario: 2090},
    {matricula: 1872, nome: "Sabrina", funcao: "Gerente", salario: 1750},
]
colaboradores.forEach (reajuste =>
{
    const {nome,funcao,salario} = reajuste
    console.log(`O(A) funcionario(a) ${nome} que está na função de ${funcao}, possui o salario de ${salario} e com o reajuste de ${(salario*10)/100 },tem o novo salário de ${salario + ((salario*10)/100)}!!`)
})