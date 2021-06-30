// Aula 5
// diferenças, var = variavel global, let = variavel local
// Exemplo 1:
{
    {
        {
            var x = 10;
        }
    }
}
// Exemplo 2:
var numero = 10
{
    {
        var numero = 20
        console.log("Dentro:", numero)
    }
}
console.log("Fora:", numero)
var numero = 30
console.log("Terceiro", numero)

// Exemplo 3
for (var i=0; i<10; i++)
{
    console.log(i)
}
console.log(i)

// Exemplo 4 
var nome = "Ana"
var sobrenome = "Souza"
var nome = "Rosa"
console.log(nome)
console.log(sobrenome)

// Exemplo 5

{
    {
        {
            {
                let X = 10
            }
        }
    }
}
console.log(x)

let numero = 10 
{
    {
        let numero = 20
        console.log("Dentro: ", numero)
    }
}
console.log("Fora: ", numero)

// Exemplo 6
// Nesse exemplo vai dar erro
for (let i = 0; i < 10; i++)
{
    console.log(i)
}
console.log(i)

// Aula 6
// Exemplo 7
let nome = "Ana"
let sobrenome = "Souza"
let nome = "Rosa"
console.log(nome)
console.log(sobrenome)

// Exemplo 8
const numero = 10
{
    {
        const numero = 20
        console.log("Dentro", numero)
    }
}
console.log("Fora",numero)

// Exemlo 9
for (const i = 0; i < 10; i++)
{
    console.log(i)
}
console.log(i)

// Exemplo 10
const nome = "Ana"
const sobrenome = "Souza"
const nome = "Rosa"
console.log(nome)
console.log(sobrenome)

// Hoistinhg com variáveis
nome = "Maria"
imprimeNome (nome)

function imprimeNome(x)
{
    console.log("Nome: ", x)
}
var nome;
// Com let, só ñ daria erro se o let fosse eclarado antes de nome/ inicio do código
nome = "Maria"
imprimeNome (nome)

function imprimeNome(x)
{
    console.log("Nome: ", x)
}
let nome;

// vai imprimir 10
let valor = 10
if (true)
{}
console.log(valor)

// vai imprimir 10 e 10
let valor = 10
if (true)
{
    console.log(valor)
}
console.log(valor)

// vai dar erro
let valor = 10
if (true)
{
    console.log(valor)
    let valor
}
console.log(valor)

// undefined e 10
let valor = 10
if (true)
{
    let valor
    console.log(valor)
}
console.log(valor)
