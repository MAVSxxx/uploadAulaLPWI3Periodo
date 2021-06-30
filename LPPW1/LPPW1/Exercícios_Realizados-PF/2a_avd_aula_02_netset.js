
let alunos = [
  { nome: 'ana', salario: 1000 },
  { nome: 'maria', salario: 2000 },
]

const aluno = { nome: 'rita', salario: 3000 }

//alunos = alunos.concat(aluno) 
alunos.push(aluno)

// react - imutabalidade
// ... spread operador - copia todos os elementos do array alunos
alunos = [...alunos, aluno]

console.log(alunos)



const numeros = [60, 100, 20, 10, 30, 20, 40, 50, 30, 50, 100]
let novosNumeros = new Set(numeros) // gera um objeto sem valores duplicados
let numero2 = Array.from(new Set(numeros)) //
console.log(novosNumeros)
console.log(numero2)

// Luiz Claudio - LPW
// Luiz Claudio - LPW II
// Debora - Logica
// Debora - BD

// Luiz Claudio
// Debora

// Exercicio
// Crie o seguinte array 
let nomes = ['ana', 'maria', 'rita', 'rosa', 'ana', 'rita', 'pedro', 'jose', 'pedro']
// Gere um novo sem os nomes duplicados e liste-os

let nomes = ['ana', 'maria', 'rita', 'rosa', 'ana', 'rita', 'pedro', 'jose', 'pedro']
let novosNomes = Array.from(new Set(nomes))
console.log(novosNomes)
novosNomes.reverse()
console.log(novosNomes)
// ordena o array em ordem alfabética crescente
novosNomes.sort()
console.log(novosNomes)
// ordena o array em ordem alfabética decrescente
novosNomes.sort().reverse()
console.log(novosNomes)



let numeros = [100, 109, 105, 104, 10, 12, 1, 22, 30, 20, 18, 30, 34, 40, 50, 44]
numeros.sort()
console.log(numeros)
// ordena em ordem crescente numérica
numeros.sort((a, b) => a - b)
console.log('crescente: ', numeros)
// ordem em ordem decrescente numérica
numeros.sort((a, b) => b - a)
console.log('decrescente: ', numeros)


let funcionarios = [
  { nome: 'ana', salario: 1000 },
  { nome: 'pedro', salario: 4000 },
  { nome: 'jose', salario: 3000 },
  { nome: 'rita', salario: 2000 },
  { nome: 'maria', salario: 8000 },
  { nome: 'carla', salario: 3000 },
]
// ordena pelo nome em ordem crescente
funcionarios.sort((a, b) => (a.nome < b.nome ? -1 : 1))
console.log(funcionarios)

// ornde pelo salario em orderm crescente
funcionarios.sort((a, b) => (a.salario < b.salario ? -1 : 1))
console.log('')
console.log(funcionarios)

// ordena pelo nome em ordem descrescente
funcionarios.sort((a, b) => (b.nome > a.nome ? 1 : -1))
console.log('Ordem decrescente do nome')
console.log(funcionarios)

// rocketset discover html / css / js