const person = 
{
  name: 'Luiz',
  lastname: 'Souza',
  age: 48
}
console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))

//  Criar um array books
let books = [];
//  .push - Insire novos elementos no final do array.
books.push({ name: 'Cangaceiro JS', pages: 200 })
books.push({ name: 'Introducao ao NodeJS', pages: 100 })
books.push({ name: 'Criando aplicações com NodeJS', pages: 250 })
console.log(books)

//  .pop - Tira o ultimo elemento do array books.
const lastBook = books.pop()
console.log(lastBook)
console.log(books)

//  JSON.stringify - converte um objeto javascript em string
const livrosStrings = JSON.stringify(books)
console.log('JSON.stringify: ', livrosStrings)

//  JSON.parse - converte dados strings para um objeto JS (JavsScript)
const livrosObjetos = JSON.parse(livrosStrings)
console.log('JSON.parse: ', livrosObjetos)

// .concat - Combina os elementos de dois arrays diferentes.
let sul = ['rs', 'pr', 'sc']
let sudeste = ['rj', 'mg', 'sp', 'es']
let brasil = sul.concat(sudeste)
console.log('Brasil - concat: ', brasil)
// .unshift - Insere elemtentos do final de um array.
brasil.unshift('pa')  
brasil.unshift('am')
brasil.unshift('to')
console.log('Brasil com regiao norte no inicio do array: ', brasil)
//  .shift - Remove o primeiro elemento
let primeiroEstado = brasil.shift()
console.log('Brasil após remover o primeiro estado: ', brasil)

const newSul = brasil.slice(2, 5)
console.log('Estados do Sul: ', newSul)

const nordeste = ['ba', 'ce', 'rn', 'pe']
console.log('Brasil: ', brasil)

let newSudeste = brasil.splice(5, 4)
console.log('Estados do Sudeste: ', newSudeste)
console.log('Brasil: ', brasil)

// let newBrasil = []
// brasil.forEach((item, indice) => {
//   newBrasil.push({
//     id: indice,
//     estado: item
//   })
// })
// console.log(newBrasil)

// let newBrasil = brasil.map((item, indice) => {
//   return ({
//     id: indice,
//     estado: item
//   })
// })
// console.log(newBrasil)

let newBrasil = brasil.map((item, indice) => {
  return ({
    id: indice + 1,
    estado: `${item} pertence ao Brasil`
  })
})
console.log(newBrasil)