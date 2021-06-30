// Aula 1.
// Variáveis:
// var - let, variáveis;
// const, constante.
// ctrl + S para salvar as alterações no código.
var x = 10  // Cria a variável x numérica.
var nome = "João"   // Cria a variável nome com o string.
var curso = "JavaScript"    // Cria a variável curso como string.
console.log(x)   // Para logar\exibir o conteúdo da variável dentro do parenteses.
console.log(nome,curso) // É possivel imprimir mais de uma variável.
console.log("Nome: ", nome) //Imprimindo o conteudo da variavel com o significado.
console.log("Curso: ", curso)   

/////////////////////////////////////////////////////////////////////////////////////
// Aula 2

var verifica = true
if (verifica)
{

}
var teste = false
if (!teste) 
{
    console.log("entrou no if")
}

// boolean - true false
var verifica = true

// Ojetos e arrays
// Objeto = {}
var pessoa = {altura: 1.87, peso: 90}
console.log(pessoa.altura)
console.log(pessoa.peso)

// Exercício em aula
var funcionarios = {mat: 1234, nome: "Ana", setor: "RH", salario: 2000.00}
console.log(funcionarios.salario)
console.log(funcionarios.mat, funcionarios.setor)

// Desestruturação
var {mat, nome, setor, salario} = funcionarios
console.log(salario)

// Camel Case
var salarioComAumento = salario * 1.10 // salario + (salario * 10/ 100)
console.log(salario, salarioComAumento)

// Arrays = []
var numeros = [10, 20, 30, 40, 50, 60]
console.log(numeros[0])
console.log(numeros[3])

// Array com strings
var nomes = ["Ana", "Maria", "Jose", "Ricardo", "Pedro"]

//Array de objetos
var alunos = 
[
    {mat: 1234, nome: "Carla", nota1: 10},
    {mat: 1235, nome: "Manoel", nota1: 9},
    {mat: 1236, nome: "Jose", nota1: 5},
    {mat: 1237, nome: "Maria", nota1: 4},
]
console.log(alunos[1])
console.log(alunos[3].nome) // Para imprimir um conteudo dentro do objeto

// Treino e Condições
const produtos = 
{
    id: 10,
    descricao: "Notebook",
    quantidade: 20,
    preco_unitario: 1500.00
} 
// Imprima a seguinte mensagem: O produto XXXX tem o valor unitário de xxxxx
// Calcule o valor total = quantidade * valor unitario
// Imprime a seguinte mensagem: O produto xxx tem o valor total de xxxx
// Se o valor total for maior ou igual a 40000 imprima preço alto senão preço baixo
// Altere o conteudo dos atributos descricao e quantidade.
let {id, descricao, quantidade, preco_unitario} = produtos // desestruturação
console.log("O produto", descricao,"tem o valor unitário de:", preco_unitario)
    let valorTotal = quantidade * preco_unitario
console.log(`O produto ${descricao} tem o valor total de: ${valorTotal}`)
    let VT = valorTotal
    if (VT >= 40000)
    {
        console.log("Preço alto!!!")
    }
    else 
    {
        console.log("Preço baixo!!!")
    }

// If ternário
(valorTotal >= 40000) ? console.log("Preço alto!!") : console.log("Preço baixo!!!")

// Trocar o valor do atributo
descricao = "Impressora"
quantidade = 40
console.log("O produto", descricao,"tem o valor unitário de:", quantidade)

//////////////////////////////////////////////////////////////////////////////
// Aula 3
// Operadores Aritméticos

console.log(2 + 2) // Adição
console.log(4 - 2) // Subtração
console.log(4 * 2) // Multiplicação
console.log(10 / 2) // Divisão
console.log( 2 ** 3) // Potenciação

// Exemplos
let numero = 10
     // Uma forma de somar um valor a uma variáveil
console.log(numero)
// OU
            // Sempre acrescenta +1
console.log(numero)
// Para subtrair
    numero = numero -1
console.log(numero)
// OU
    numero--
console.log(numero)

// Outros modos
let x1 = 20
    x1 = x1 + 10
console.log(x1)
    x1 += 100
console.log(x1)
    x1 = x1 - 40
// OU
    x1 -= 40
console.log(x1)
// Multiplicando
    x1 = x1 * 2
// OU 
    x1 *= 2
console.log(x1)
// divisão
    x1 = x1 / 10
// OU 
    x1 /= 10
console.log(x1)

// Operadores Relacionais
// true e false
console.log(10 = 10)
console.log(10 = 11)
console.log(10 = "10")
console.log(10 == "10")
// > maior que
console.log(10 > 2)
// >= maior ou igual a
console.log(10 >= 10)
console.log(10 >= 12)
// < menor que
console.log(10 < 5)
// <= menor ou igual a
console.log(10 <= 20)

// Introdução a função no JS
function resultado()
{
    return 10 + 2
}
let retorno = resultado()
console.log(retorno)
//  Outra forma
console.log(retorno())

// Outro Exemplo
function somar(x1,x2)
{
    let soma = x1 + x2
    return soma
}
let resultado = somar(10,2)
console.log(resultado)

// Função Seta - arrow function
const resultados = () => 
{
    return 10 + 2
}
let retorno = resultados ()
console.log(retorno)

// Outro exemplo
const somar = (x1,x2) => 
{
    let soma = x1 + x2
    return soma
}
console.log(somar(5,2))

/* Crie uma função para receber um nome se o nome tiver 
mais que 5 caracteres retorne a mensagem, o nome tem mais 
de 5 caracteres senao, retorna o nome não tem mais que 5 caracteres*/

// função length - conta a quantidade de caracteres de um campo ou variável

function nomes(nome)
{  
    if (nome.length > 5)
    {
        return `O nome ${nome} tem mais que 5 caracteres!!`
    }
    else 
    {
        return `O nome ${nome} não tem mais que 5 caracteres!!`
    }
}
let nresultado = nomes("Carlos")
console.log(nresultado)

// If ternario
function nomes(nome)
{  
    let verifica = nome.length > 5 ? `O nome ${nome} possui mais que 5 carateres!!` 
    : `O nome ${nome} possui menos que 5 carateres!!`
    return verifica
}
let nresultado = nomes("Nuno")
console.log(nresultado)
///////////////////////////////////////////////////////////////////////////////////////////
// Aula 4

// Operadores lógicos
// && (and) - e
let x = 3
let y = 7
if (x == 3 && y == 7)
{
    console.console.log("Acertou!!")
}
else
{
    console.log("Errou!!")
}

// || (or) - ou
let x = 3
let y = 7
if (x == 3 || y == 7)
{
    console.console.log("Acertou!!")
}
else
{
    console.log("Errou!!")
}

// ! (not) - não
let x = true
if (!x)  // if (x == true)
{
    console.log('A')
}
else
{
    console.log('B')
}

// diferente
let curso = "js"
if (curso !== "js") 
{
    console.log("X")
}
else
{
    console.log("Y")
}

// Crie um objeto chamado notas com os atributos: maticula, disciplina, nota1 e nota2
const notas = { matricula: 20210102, disciplina: "LPW", nota1: 8, nota2: 9}
// Imprima os atributos disciplina e nota1
console.log("A primeira nota da disciplica ",notas.disciplina," foi:", notas.nota1)
// desestruturar o objeto notas
const {matricula, disciplina, nota1, nota2} = notas
// Calcule a média do aluno: soma das duas notas e divide por 2
const media = (nota1 + nota2) /2
console.log("A média do aluno foi:", media)
/* se a média for <5 exiba reprovado, se a média for igual a 5 e menor que 7 exiba 
recuperação, se a média for maior ou igual a 7 exiba aprovado */
function resul (media1)
{
    if (media1 < 5)
    {
        return "Aluno Reprovado!!!"
    }
    else if (media1 >= 5 && media1 < 7)
    {
        return "Aluno de Recupareção!!"
    }
    else
    {
        return "Aluno Aprovadoo!!!"
    }
}
let dresultado = resul(media)
console.log(dresultado)
// Imprima a seguinte mensagem
// O aluno XXXXX da disciplina XXX teve a média xxxxx e o seu resultado foi xxxx
let resultado = resul
console.log(`O aluno Marco da disciplina ${disciplina} teve a média ${media} e o seu resultado foi ${dresultado}`)

// Exercício 1
// Crie um objeto chamado funcionérios com os seguintes atributos
// matricula, nome, função, setor e salario
//              Calcule: 
// fgts = 8% do salário, 
//              inss 
// se o salário < 1000 e o inss = 5% do salario, se o salário >= 1000 e < 2000 o 
// inss = 7% do salario, se o salario >= 2000 e < 3000 o inss = 9% do salário, 
// se o salario >= 3000 o inss = 11% do salario
//              irf
// se o salario < 2000 o irf = isento
// se o salario >= 2000 e < 4000 o irf = 5% do salario - 10
// se o salario >= 4000 e < 5000 o irf = 6% do salario - 12
// se o salario >= 5000 o irf = 7% do salario - 14
//          salario liquido
// salario - inss - irf
//              Imprima
// o funcionario xxx tem a funcao de xxx com o salario xxxx teve o
// salario liqudio de xxxx
const funcionarios =  {matricula: 20210458, nome: "Dario", funcao: "Operador de Máquinas",setor:"ALD", salario: 1250}
let {matricula, nome, funcao, setor, salario} = funcionarios

let fgts = salario * 0.08
let inss = null
    if (salario < 1000)
    {
        inss = salario * 0.05
    }
    else if (salario >= 1000 && salario < 2000)
    {
        inss = salario * 0.07
    }
    else if (salario >= 2000 && salario < 3000)
    {
        inss = 0.09
    }
    else 
    {
        inss = salario * 0.11
    }
let irf = null
    if (salario < 2000)
    {
        irf = 0
    }
    else if (salario >= 2000 && salario < 4000)
    {
        irf = (salario * 0.05) - 10
    }
    else if (salario >= 4000 && salario < 5000)
    {
        irf = (salario * 0.06) - 12
    }
    else 
    {
        irf = (salario * 0.07) - 14    
    }
let salarioLiquido = (salario - inss) - irf
console.log(`O funcionario ${nome} tem a função ${funcao} com o salário ${salario}, teve o salário liquído de: ${salarioLiquido}!!`)


// Exercício 2
// Crie uma função para receber uma palavra
// se a palavra tiver mais que 7 caracteres retorne-a em letras
// maiúsculas, caso contrário retorne-a em letras minúsculas
// utilize o if else e o if ternário
function palavra2(plv)
{
    if (plv.length > 7)
    {
        console.log(plv.toUpperCase())
    }
    else
    {
        console.log(plv.toLowerCase())
    }
}
let resp = palavra2("triciclo")


// Exercício 3
// Crie uma função para receber o preco e ela deve retornar o desconto
// se o preco for menor que 100 o desconto será zero
// se o preco for maior ou igual a 100 e menor que 300 o desconto será
// de 5% do preço
// se o preco for maior ou igual a 300 o desconto será 7% do preço
// Crie a funçào com a palavra reservada function e arrow function
// Imprima o nome do produto, preço, desconto e o valor a pagar fora
// da função

function desconto(preco)
{
    if (preco < 100)
    {
        let desc = 0
    }
    else if (preco >= 100 && preco < 300)
    {
        desc = preco * 0.05
    }
    else 
    {
        desc = preco * 0.07
    }
    return desc
}
var deco = desconto(150)
console.log(`A Batedeira tem o valor de R$150 e com o desconto de ${desc}, o 
valor a pagar é: ${150 - desc}`)

// outro

const dados = {produto: "Notebook", preco: 5200.00}
const {produto, preco} = dados
let descontoPreco = valorDesconto(preco)
let valorPagar = preco - descontoPreco
console.log(`Produto: ${produto}, preço ${preco}, desconto ${descontoPreco} e o valor a pagar é:${valorPagar}`)

function valorDesconto (preco)
{
    let descont = 0
    if (preco < 100)
    {
        descont = 0
    }
    else if (preco >= 100 && preco < 300)
    {
        descont = preco * 0.05
    }
    else 
    {
        descont = preco * 0.07
    }
    return descont
}
