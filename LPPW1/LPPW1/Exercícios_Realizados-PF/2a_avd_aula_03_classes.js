class Funcionario {
  constructor(nome, salario) {
    this._nome = nome;
    this._salario = salario;
  }

  // Métodos acessadores - get / set
  // get será utilizado para acessar o conteúdo do atributo
  get nome() {
    return this._nome;
  } 

  get salario() {
    return this._salario;
  }

  // set será utilizado para alterar o conteúdo do atributo
  set nome(nome) {
    this._nome = nome;
  }

  set salario(salario) {
    this._salario = salario
  }

  reajuste() {
    return this._salario * 1.10
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, cpf) {
    super(nome, salario)
    this._cpf = cpf
  }
  
  get cpf() {
    return this._cpf;
  }

  set cpf(cpf) {
    this._cpf = cpf
  }

  reajuste() {
    return this._salario * 1.20
  }
}


// instanciar - fazer referencia a classe
let func = new Funcionario('Ana', 4000)
console.log(func.nome, func.salario, func.reajuste())
func.nome = 'Joana Silva'
func.salario = 2000
console.log(func.nome, func.salario, func.reajuste())

let ger = new Gerente('Maria', 3000, 9510)
console.log(ger.nome, ger.salario, ger.reajuste().toFixed(2), ger.cpf)


// instanciar - fazer referencia a classe
//let dados = new Funcionario('Jose', 1000)
//console.log(dados.nome, dados.salario)
//dados.nome = 'Pedro dos Santos'
//console.log(dados.nome, dados.salario)

