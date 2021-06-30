/*              Marco Antônio Ventura Silva - 202010084 - 3ºPeríodo

    1. Dado o array de objetos abaixo:

let funcionarios = 
[
    { nome: 'ana', salario: 1000, funcao: 'analista' },
    { nome: 'pedro', salario: 4000, funcao: 'gerente' },
    { nome: 'jose', salario: 3000, funcao: 'coordenador' },
    { nome: 'rita', salario: 2000, funcao: 'analista' },
    { nome: 'maria', salario: 8000, funcao: 'secretaria' },
    { nome: 'carla', salario: 3000, funcao: 'secretaria' },
]

    1.1 Gere um novo array em ordem crescente da função e imprima-o.

    1.2 Gere e imprima um novo array com somente os analista. A partir deste array 
    gere e imprima um novo array contendo nome, salário, salário com reajuste de 5%, 
    função em letras maiúsculas, tamanho do nome. No final imprima a soma dos salários 
    dos analista.
*/

let funcionarios = 
[
    {nome: 'ana', salario: 1000, funcao: 'analista'},
    {nome: 'pedro', salario: 4000, funcao: 'gerente'},
    {nome: 'jose', salario: 3000, funcao: 'coordenador'},
    {nome: 'rita', salario: 2000, funcao: 'analista'},
    {nome: 'maria', salario: 8000, funcao: 'secretaria'},
    {nome: 'carla', salario: 3000, funcao: 'secretaria'},
]
console.log(funcionarios)

let novosFuncio = funcionarios.sort((a, b) => (a.funcao < b.funcao ? -1 : 1))
console.log(novosFuncio)

let novosAnalist = novosFuncio.slice(0,2)
console.log(novosAnalist)

let atualizAnalist = [] 
novosAnalist.forEach((item) =>
{
    atualizAnalist.push({
        Funcionario: item.nome,
        Salario: item.salario,
        SalarioReajustado: item.salario + (item.salario * 0.05),
        Funcao: item.funcao.toUpperCase(),
        QuantidadDeLetrasDoNome: item.nome.length
    })
})
console.log(atualizAnalist)

let soma = 2100 + 1050
console.log(`A soma dos salários dos ANALISTAS é: ${soma}!!`)

