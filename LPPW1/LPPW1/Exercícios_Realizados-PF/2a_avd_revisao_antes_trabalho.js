
// Questão 1
/*1) Cria uma classe chamada SI com os atributos nome e salario.
Crie os getters e setters e o método reajuste para ajustar o salário em 5%
Crie uma classe coordenador para estender da classe SI e crie o método reajuste
para reajustar o salário em 15%
Crie uma classe professor para estender da classe SI e crie um método reajuste
para ajustar o salário em 10%
Crie uma instância da classe Professor passando os valores de nome e salario.
Imprima o nome, salário e o valor do reajuste.
*/

class si {
  constructor(nome, salario) {
    this._nome = nome;
    this._salario = salario;
  }

  get nome() {
    return this._nome;
  }

  get salario() {
    return this._salario
  }

  set nome(nome) {
    this._nome = nome
  }

  set salario(salario) {
    this._salario = salario
  }

  reajuste() {
    return this._salario * 1.05
    // return this._salario + (this._salario * 5 / 100)
    // return this._salario + (this._salario * 0.05)
  }
}

class Coordenador extends si {
  constructor(nome, salario, cpf) {
    super(nome, salario)
    this._cpf = cpf
  }

  reajuste() {
    return this._salario * 1.15
    // return this._salario + (this._salario * 15 / 100)
    // return this._salario + (this._salario * 0.15)
  }
}

class Professor extends si {
  constructor(nome, salario) {
    super(nome, salario)
  }


  reajuste() {
    return this._salario * 1.10
    // return this._salario + (this._salario * 10 / 100)
    // return this._salario + (this._salario * 0.10)
  }
}

const prof = new Professor('Pedro', 1000)
console.log(prof.nome, prof.salario, prof.reajuste())



/*
2) Crie um array de objetos chamado professores com os atributos professor e período.
Crie dois objetos. Crie um novo objeto e adicione-o no array professores,
utilizando o conceito de imutabilidade.

let professores = [
  { professor: 'jose', periodo: 5 },
  { professor: 'maria', periodo: 4 },
]

const professor = { professor: 'rita', periodo: 5 }

//professores.push(professor)
// ... spread operador
professores = [...professores, professor]
console.log(professores)

/*
3) Crie um array com os números 100, 200, 100, 400, 200, 1000, 400, 700, 800.
Gere um novo array sem os números repetidos. Imprime o array original e o
novo array em ordem numérica crescente.

const numeros = [100, 200, 100, 400, 200, 1000, 400, 700, 800]
// ordem numérica crescente
let novosNumeros = Array.from(new Set(numeros)).sort((a, b) => a - b)
console.log(numeros, novosNumeros)
// ordem numérica decrescente
novosNumeros = Array.from(new Set(numeros)).sort((a, b) => b - a)
console.log(novosNumeros)
*/


/*
4) Crie um array de nomes:
ana, maria, rita, jose, ana, maria, ana, carla, rose, jose, rita, pedro, carlos.
Gere um novo array sem os nomes repetidos.
Imprime o array gerado em ordem decrescente.
Imprimia cada nome desse array e o respectivo tamanho.

let nomes = ['ana', 'maria', 'rita', 'jose', 'ana', 'maria', 'ana', 'carla',
  'rose', 'jose', 'rita', 'pedro', 'carlos']
let novosNomes = Array.from(new Set(nomes)).sort().reverse()
console.log(novosNomes)
novosNomes.forEach(nome => console.log(ome, nome.length))
*/

/*
5) Dado o array de nomes
ana, maria, rita, jose, ana, maria, ana, carla, rose, jose, rita, pedro, carlos.
Gere um novo array sem os nomes repetidos.
Gere um novo array de objetos no seguindo formato:
 { ordem: 1, nome: nome em letras maiúsculas, tamanho: número de caracteres do nome }

let nomes = ['ana', 'maria', 'rita', 'jose', 'ana', 'maria', 'ana', 'carla',
  'rose', 'jose', 'rita', 'pedro', 'carlos']
let novosNomes = Array.from(new Set(nomes))
console.log(novosNomes)
nomes2 = novosNomes.map((nome, indice) => {
  return { ordem: indice + 1, nome: nome.toUpperCase(), tamanh: nome.length }
})
console.log(nomes2)

*/










