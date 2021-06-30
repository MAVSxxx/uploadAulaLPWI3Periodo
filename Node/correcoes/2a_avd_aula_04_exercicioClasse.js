class Conta {
  constructor(nome, cpf, saldo) {
    this._nome = nome
    this._cpf = cpf
    this._saldo = saldo
  }

  get nome() {
    return this._nome;
  }

  get cpf() {
    return this._cpf;
  }

  get saldo() {
    return this._saldo;
  }

  set nome(nome) {
    this._nome = nome
  }

  set cpf(cpf) {
    this._cpf = cpf
  }

  set saldo(saldo) {
    this._saldo = saldo
  }

  deposita(valor_deposito) {
    return this._saldo + valor_deposito
  }

  saca(valor_saque) {
    return this.saldo - valor_saque
  }

  atualiza(taxa_aumento) {
    return this._saldo + (this._saldo * taxa_aumento / 100)
    // return this.saldo * (1 + taxa_aumento / 100)
  }
}

class Poupanca extends Conta {
  constructor(nome, cpf, conta, saldo, numPoupanca) {
    super(nome, cpf, saldo)
    this._conta = conta
    this._numPoupanca = numPoupanca
  }
  get numPoupanca() {
    return this._numPoupanca;
  }
}

let dadosConta = new Conta('Pedro', '010101-00', 2000)
console.log(dadosConta.nome, dadosConta.saldo)
dadosConta.saldo = dadosConta.deposita(1000)
console.log('Novo Saldo', dadosConta.saldo)
dadosConta.saldo = dadosConta.saca(500)
console.log('Saldo após saque', dadosConta.saldo)
dadosConta.saldo = dadosConta.atualiza(10)
console.log('Saldo apos reajuste taxa 10%', dadosConta.saldo)
let poup = new Poupanca('Joao', '01010101-00', 'numconta01', 1000, 'numpoup1')
console.log(poup.nome, poup.saldo, poup._numPoupanca)
poup.saldo = poup.atualiza(20)
console.log('Saldo Poupanca reajuste 20%', poup.saldo)


