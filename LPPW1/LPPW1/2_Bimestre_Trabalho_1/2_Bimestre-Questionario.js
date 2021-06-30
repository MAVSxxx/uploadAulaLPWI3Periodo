// Questão 1
cursos = ['js','ts','react', 'nodejs', 'react native', 'postgres', 'mongodb', 
'sqlite', 'dbeaver', 'beekeeperStudio']

console.log(cursos.slice(3,7))

// questão 2
let nomes = ['ana', 'maria', 'rita', 'rosa', 'pedro', 'jose', 'pedro']
console.log(nomes)
let novosNomes = nomes.reverse()
console.log(novosNomes)

//Questão 7
cursos = ['js','ts','react', 'nodejs', 'react native', 'postgres', 
'mongodb', 'sqlite', 'dbeaver', 'beekeeperStudio']
cursos.splice(3,2)
console.log(cursos)

//Questão 8
const numeros = [1, 2, 1, 2, 6, 2, 3, 1, 4, 3, 4, 5, 3, 5, 6]
const novosNumeros = Array.from(new Set(numeros))
console.log(novosNumeros)

// Questão 12
let produtos = [
    { produto: 'camisa', quantidade: 10 },
    { produto: 'tenis', quantidade: 40 },
    { produto: 'blusa', quantidade: 30 },
    { produto: 'calca', quantidade: 20 },
    { produto: 'bola', quantidade: 80 },
  ]
produtos.sort((a, b) => (a.produto < b.produto ? -1 : 1))
console.log(produtos)

//Questão 15
let numeros = [100, 109, 105, 104, 10, 12, 1, 22, 30, 20, 18, 30, 34, 40, 50, 44]
numeros.sort((a, b) => a - b)
console.log(numeros)