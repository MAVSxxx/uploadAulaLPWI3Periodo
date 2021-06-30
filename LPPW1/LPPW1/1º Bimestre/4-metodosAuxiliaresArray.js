// Aula 9

// filtra o array e pega os numeros maiores que trinta
let numeros = [10, 20, 5, 4, 50, 60, 80, 26]
let novosNumeros = numeros.filter (num => num > 30) // num = variavel (poderia ser qualquer nome)
console.log(novosNumeros)

/*
    Dado o array abaixo
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
    Gere um novo array com somente os alunos com média maior que 7. No novo
    array deve ter somente os atributos matricula e nome.
    A partir do array alunos, gere um novo array sem a matricula 13.
    A partir do array alunos, gere um novo array com os alunos que tem o 
    tamanho do nome com 4 caracteres.
    A partir do array de alunos gere um novo array com as matriculas pares.
    A partir do array de alunos gere um novo array com os objetos que tem 
    o indice impar.
*/
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]

alunosMediaMaiorQue7 = alunos
    .filter (aluno => ((aluno.nota1+ aluno.nota2) /2) > 7)
console.log(alunosMediaMaiorQue7)

// Gere um novo array com somente os alunos com média maior que 7. No novo array deve ter somente os atributos matricula e nome.
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
alunosNomeEMatricula = alunos
    .map (aluno => 
    {
        const {matricula, nome} = aluno
        return {matricula, nome}
    })
console.log(alunosNomeEMatricula)

// A partir do array alunos, gere um novo array sem a matricula 13.
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
let alunosRetornados = alunos
    .filter (aluno => aluno.matricula != 13)
console.log(alunosRetornados)

// A partir do array alunos, gere um novo array com os alunos que tem o tamanho do nome com 4 caracteres.
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
let nomesCom4Caracteres = alunos
    .filter (aluno => aluno.nome.length == 4)
console.log(nomesCom4Caracteres)

// 
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
let novosAlunos = alunos
    .filter (aluno => aluno.matricula > 11 && aluno.nota1 > 4.5)
console.log(novosAlunos)

//  A partir do array de alunos gere um novo array com as matriculas pares.
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
let alunosMatriculaPares = alunos
    .filter (aluno => aluno.matricula % 2 == 0)
    console.log(alunosMatriculaPares)

// A partir do array de alunos gere um novo array com os objetos que tem o indice impar.
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
let alunosIndiceImpar = alunos
    .filter ((aluno, indice) => (indice % 2 != 0))
console.log(alunosIndiceImpar)

// Aula 9

// Every - true ou false / quando todos elementos do array atender a condição será
// retornado o valor true caso contrário false

// Todo os alunos tem a nota1 maior que 3?
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
let alunosNota1maiorQue3 = alunos.every (aluno => aluno. nota1 > 3)
console.log(alunosNota1maiorQue3)

// Todo os alunos tem a nota2 maior que 7?
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
let alunosNota2maiorQue7 = alunos.every (aluno => aluno. nota2 > 7)
console.log(alunosNota2maiorQue7)

// some - pelo menos 1 elemento do array tem que atender  ele retorna verdadeiro, se não (true ou false)
let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
alunosNota1maiot5_5 = alunos
    .some (aluno => aluno.nota1 > 9)
console.log(alunosNota1maiot5_5)
if (alunosNota1maiot5_5)
{
    console.log("Existe pelo menos um aluno com a nota1 maior que 9!!")
}

/*
Dados o array peso das malas:
    let pesoDasMalas = [10, 12, 17, 26, 12, 6, 12, 20]
Se existir alguma mala com o peso maior que 23 exiba a mensagem:
    "Existe pelo menos uma mala com o peso maior que 23kg"
Caso contrário exiba: "Não existe nenhuma mala com peso maior que 23kg"
Utilize o if ternário.
*/
let pesoDasMalas = [10, 12, 17, 26, 12, 6, 12, 20]
let verificaMalas = pesoDasMalas.some (peso => peso > 23)
let resultado = verificaMalas ? (`Existe pelo menos uma mala com o peso maior 
que 23kg!!!`) : (`Não existe nenhuma mala com peso maior que 23kg!!!`)
console.log(resultado)

// findIndex - retorna o indice do array de acordo com o critério
let pesoDasMalas = [10, 12, 17, 26, 12, 6, 12, 20]
let indice = pesoDasMalas
    .findIndex (peso => peso == 26)
console.log(indice)
// Substitua o valor 26 por 27
pesoDasMalas[indice] = 27
console.log(pesoDasMalas)

let alunos = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 5},
    {matricula: 11, nome: "Rita", nota1: 4, nota2: 6},
    {matricula: 12, nome: "Carlos", nota1: 5, nota2: 8},
    {matricula: 13, nome: "Rosa", nota1: 6, nota2: 9},
]
let indice = alunos
    .findIndex (aluno => aluno == "Carlos")
console.log(indice)

// Aula 10

// Total de funcionários com o salário maior que 3.500,00

const func = 
[
    { nome: 'Ana', cidade: 'BM', salario: 1000 },
    { nome: 'Paula', cidade: 'VR', salario: 2000 },
    { nome: 'Rosa', cidade: 'BP', salario: 3000 },
    { nome: 'Rita', cidade: 'BM', salario: 4000 },
    { nome: 'Carlos', cidade: 'VR', salario: 5000 },  
    { nome: 'Pedro', cidade: 'BP', salario: 6000 },
]
const total = func
    .filter (f => f.salario > 3500)
    .reduce ((tot, x) => tot += 1, 0)
console.log(total)


// Desafios

/*Crie um array com 10 números diferentes. Gere um array com os números 
pares, ímpares, números multiplicados por 4. Imprima o somatório de cada 
array individual e a quantidade de itens de cada array.
*/
let numeross = [4, 2, 7, 15, 36, 41, 16, 78, 29, 30]
let geracao = numeros
    .filter (n => n / 2 % 0)

/*Crie um array de objetos itens, conforme abaixo
let itens = [
{​​​​ codigo: '2143', valor: 260 }​​​​,
{​​​​ codigo: '2111', valor: 500 }​​​​
{​​​​ codigo: '2222', valor: 120 }​​​​,
{​​​​ codigo: '2143', valor: 280 }​​​​
{​​​​ codigo: '2143', valor: 110 }​​​​,
{​​​​ codigo: '7777', valor: 390 }​​​​
];
a) Gere um novo array somente com os códigos = 2143. Imprima o somatório 
dos valores e a quantidade de itens desse array.
c) Gere um novo array com os códigos iguais a 2143 e valores maiores que 
210.
Imprima o somatório do valor e a quantidade de itens desse array.
*/


/*Crie um array com os seguintes números: 7, 14, 21, 28, 35, 42. Você deve 
retornar o valor total da soma de todos os números. Imprima o array com os 
números utilizando o forEach e a variável do valor total da soma com o 
console.log.
*/
