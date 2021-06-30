// Aula 7 
// Desturing - desestruturação

// Exemplo 1
 let a,b
// [a,b] = [1,2]
let dados = [1, 2]
[a, b] = dados
console.log(a, b)

// Exemplo 2
const teste = [1,2]
const [a, b] = teste
console.log(a, b)

// Exemplo 3
const numeros = [10, 20, 30, 40, 50]
const [n1, , , n4, ] = numeros
console.log (n1, n4)

// Exemplo 4 
const produtos = 
{
    cosdigo: 10,
    produto: "Camisa",
    quantidade: 10,
    preco: 20
}

const {codigo, produto, quantidade, preco} = produtos
console.log(produto, quantidade, preco)

// Exemplo 5
let obj = {max: 50, min: 40}
console.log(obj)
obj = {min: 952}
console.log(obj)
obj = {}
console.log(obj)

// function rand ({min, max})
function rand ({min = 0, max = 1000})
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// função para desestruturar arrays
function rand2([min = 0, max = 1000])
{
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))

// Exercícios
/*
    Crie um array com 4 palavras. Faça a desestruturação desses array 
    retornar a 1a e última palavra. Imprime cada palavra e o seu 
    respectivo tamanho.
    Imprime a soma do tamanho das duas palavras.
*/ 
const palavras = ["sabonete", "toalha", "shampoo", "condicionador"]
const [p1, , , p4] = palavras
console.log (p1, " tem", p1.length, "caracteres, e ", p4, "tem ", p4.length, 
"caracteres")
console.log(`A soma da quantidade de caracteres das duas palavras é: ${p1.length
+ p4.length}`)

/*
Crie um array com 3 números. Crie uma função parareceber esse array 
(utilize arrow function) e faça a desestruturação do mesmo. Calcule a soma 
e a médias desses números e imprima a seguinte mensagem: A função recebeu os 
seguintes numeros x, y, z. A soma deles é 999 e a média é 99999
*/
const numeros = [13, 25, 84]
const valores = ([n1 = 0, n2 = 0, n3 = 0]) => 
{
    let soma = (n1, n2, n3)
    let media = soma/3
    console.log(`A função recebeu os seguintes números: ${n1}, ${n2} e ${n3}. `)
    console.log(`A soma deles é: ${soma} e a média é: ${media}.`)
}
valores(numeros)

// Aula 7
// Estrutura condicional
let nota = 8
let nome = "Maria Silva"
if (nota > 7 )
{
    console.log("Aprovado!!!")
}
else if (nota > 7 && nome.length > 5) 
{
    console.log("Aprovado Exemplo 2!!!")
}

// Tipos de if
let mediaa = 6
if (media >= 7)
{
    console.log("Aprovado!!!")
}
else 
{
    console.log("Reprovado!!!")
}

// Também pode ser:
let resultado = (media >= 7) ? "Aprovado!!" : "Reprovado!!"
console.log(resultado)

// 
let media = 5
if (media < 5)
{
    console.log("Reprovado!!!")
}
else if (media >= 5 &&  media < 7)
{
    console.log("Recuperação!!")
}
else if (media >= 7 && media <= 9.9)
{
    console.log("Aprovado!!!")
}
else
{
    console.log("Aprovado com Louvor!!!")
}

// || = ou
let curso = "SI"
let ano = 2021
if (curso == "SI" || ano == 2021)
{
    console.log("Afirmação verdadeira")
}

//
function seForVerdadeEuFalo(valor)
{
    if (valor)
    {
        console.log(`É verdade ${valor}`)
    }
    else 
    {
        console.log(`É falso ${valor}`)
    }
}

seForVerdadeEuFalo() // Conteudo branco é falso
seForVerdadeEuFalo(null) // cobteúdo null é falso
seForVerdadeEuFalo(undefined) // conteudo undefined é falso
seForVerdadeEuFalo(NaN) // conteudo de Nan é falso
seForVerdadeEuFalo("") // conteudo nulo é falso
seForVerdadeEuFalo(0) // conteudo zero é falso
seForVerdadeEuFalo(-1) // conteudo -1 é  verdadeiro
seForVerdadeEuFalo(' ') // conteudo em branco é verdadeiro
seForVerdadeEuFalo("?") // qualquer caracter é verdadeiro
seForVerdadeEuFalo([]) // array é verdadeiro
seForVerdadeEuFalo([1, 2]) //array com conteudo é verdadeiro
seForVerdadeEuFalo({}) // objeto é verdaddeiro

// while
let x = 1
while (x <= 10)
{
    console.log(x)
    x++
}

// for
for (let x = 1; x <= 10; x++)
{
    console.log(x)
}

//Imprima do número 10 até 1 utilizando o while e o for
let x = 10
while (x >= 1)
{
    console.log(x)
    x--
}

for (let x = 10; x >= 1; x--)
{
    console.log(x)
}

/*
Imprima os anos de 1990, 1994, 1998, 2002, 2006, 2010, 
2014, 2018 utilizando o while e o for
*/
let anos = 1990
while (anos <= 2018)
{
    console.log(anos)
    anos +=4
}

for (let anos = 1990; anos <= 2018; anos +=4 )
{
    console.log(anos)
}

/*
Crie um array com os seguintes números: 10, 20, 30, 40, 50.
Imprima cada elemento do array multiplicado por 4.
Utilize o while e o for
*/
let numeros = [10, 20, 30, 40, 50]
let indice = 0
while (indice < numeros.length)
{
    console.log(numeros[indice] * 4)
    indice ++
}

let numeros = [10, 20, 30, 40, 50]
for (let indice = 0; indice < numeros.length; indice++)
{
    console.log(numeros[indice] * 4)
}

/*
Crie um array com os seguintes números: 10, 20, 30, 40, 50.
Imprima cada elemento do array que estiver na posição par será multiplicado por
4 e na posição impar multiplicado por 5
Utilize o while e o for
*/
let numeros = [10, 20, 30, 40, 50]
let indice = 0
while (indice < numeros.length)
{
    if (indice % 2 == 0)
    {
        console.log(numeros[indice] * 4)
    }
    else
    {
        console.log(numeros[indice] * 5)
    }
    indice ++
}

/*
Crie um array com os seguintes números: 7, 14, 21, 28, 35, 42. Você deve 
imprimir cada elemento do array e no final a soma de todos os números
*/
const numeros1 = [7, 14, 21, 28, 35, 42]
const [n1, n2, n3, n4, n5] = numeros1
console.log(`Os números do array números são: ${numeros1} e a soma deles é: ${n1 + n2 + n3 + n4 + n5}!!`)

/*
Crie um array com as seguintes palavras: html, css, js, react, angulasjs, 
nodejs, vue, typescript. Você deve imprimir as palavras que estão na posição 
par em letras maiúsculas e na posição impar em letras minúsculas
*/
const palavras2 = ["html", "css", "js", "react", "angulasjs", "nodejs", "vue", "typescript"]
let i = 0
while (i < palavras2.length)
{
    if (i % 2 == 0)
    {
        console.log(palavras2[i].toUpperCase())
    }
    else
    {
        console.log(palavras2[i].toLowerCase())
    }
    i++
}

const palavras2 = ["html", "css", "js", "react", "angulasjs", "nodejs", "vue", "typescript"]
for (let i = 0; i < palavras2.length; i++)
{
    if (i % 2 == 0)
    {
        console.log(palavras2[i].toUpperCase())
    }
    else
    {
        console.log(palavras2[i].toLowerCase())
    }
}

// forEach
const palavras2 = ["html", "css", "js", "react", "angulasjs", "nodejs", "vue", "typescript"]
palavras2.forEach((p, indice) => 
{
    if (indice % 2 == 0)
    {
        console.log(p.toUpperCase())
    }
    else
    {
        console.log(p.toLowerCase())
    }   
})

/*
Crie um array com as seguintes palavras: html, css, js, react, angulasjs, 
nodejs. Você deve imprimir cada palavra e o seu tamanho. Utilize o while e 
o for
*/
const palavras3 = ["html", "css", "js", "react", "angulasjs", "nodejs"]
let i = 0
while (i < palavras3.length)
{
    console.log(`A palavre ${palavras3[i]} tem ${palavras3[i].length} caracteres`)
    i++
}

const palavras3 = ["html", "css", "js", "react", "angulasjs", "nodejs"]
for (let i = 0; i < palavras3.length; i++)
{
    console.log(`${palavras3[i]} tem ${palavras3[i].length} caracteres`)
}

// for each
const palavras3 = ["html", "css", "js", "react", "angulasjs", "nodejs"]
palavras3.forEach((p) =>
{
    console.log(`A palavra ${p} tem ${p.length} caracteres`)
})


/*
Crie um array com os seguintes números: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29; 
Você deve imprimir a seguinte frase: O número xx é par ou o número yy é ímpar, 
utilize template string e o console.log
*/
const numeros4 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29]
let i = 0
while (i < numeros4.length)
{
    if (numeros4[i] % 2 == 0)
    {
        console.log(`${numeros4[i]} é par`)
    }
    else
    {
        console.log(`${numeros4[i]} é impar`)
    }
    i++
}


const numeros4 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29]
for (let i = 0; i < numeros4.length; i++)
{
    if (numeros4[i] % 2 == 0)
    {
        console.log(`${numeros4[i]} é par`)
    }
    else
    {
        console.log(`${numeros4[i]} é impar`)
    }
}

/*
Crie um array contendo os seguintes números: 4, 9, 16, 25, 36, 49, 64, 81 e 
o programa imprime a raiz quadrada de cada número. Utilize o comando 
Match.sqrt. Exemplo: console.log(Math.sqrt(25))
*/
const numeros5 = [4, 9, 16, 25, 36, 49, 64, 81]
let i = 0
while (i < numeros5.length)
{
    console.log(Math.sqrt(numeros5[i]))
    i++
}


// Aula 8
// for Each - utilizado para percorrer um array
let nome5 = ["Ana", "Maria", "João", "Pedro"]
nome5.forEach (nome => console.log(nome, indice))

let nomes5 = ["Ana", "Maria", "Joao", "Pedro"]
nomes5.forEach((nomes5, indice) => console.log(nomes5, indice))

/* Dado o array abaio Imprima o nome do aluno, utilizando o 
forEach
*/
let alunos5 = 
[
    {matricula: 10, nome: "Pedro", media: 7},
    {matricula: 12, nome: "Rita", media: 4},
    {matricula: 13, nome: "Carlos", media: 5},
    {matricula: 14, nome: "Rosa", media: 6},
]
alunos5.forEach(alunos5 => console.log(alunos5.nome))
alunos5.forEach(alunos5 => console.log(alunos5.nome, alunos5.media))

/* Dado o array abaixo, imprima o nome do aluno e media, utilizando o forEach
O aluno xxxx teve a média 9999
*/
let aluno = 
[
    {matricula: 10, nome: "Pedro", nota1: 7, nota2: 7},
    {matricula: 12, nome: "Rita", nota1: 4, nota2: 4},
    {matricula: 13, nome: "Carlos", nota1: 5, nota2: 5},
    {matricula: 14, nome: "Rosa", nota1: 6, nota2: 6},
]
aluno.forEach(aluno => 
{
    const {nome, nota1, nota2} = aluno
    // let media = (nota1 + nota2) / 2
    console.log(`O(A) aluno(a) ${nome} teve a média: ${(nota1 + nota2) / 2}`)
    /* O(A) aluno(a) ${nome} teve a média: ${media}`)*/
})

// map = Utilizado para gerar um novo array
const numeros7 = [2, 4, 6, 8, 10, 12]
const novosNumeros = numeros7.map (num => num * 3)
console.log(numeros7)
console.log(novosNumeros)

const numeros8 = [4, 9, 10, 23, 38, 49, 64, 81]
const raizQuadradaNumeros = numeros8.map (num => Math.sqrt(num))
console.log(numeros8)
console.log(raizQuadradaNumeros)

/*
Crie um array com 6 palavras. Gere um novo array com o tamanho de cada 
palavra
*/
const palavra9 = ["JS", "Node", "var", "let", "const", "array"]
const tamanhoPalavra = palavra9.map (pala => pala.length)
console.log(palavra9)
console.log(tamanhoPalavra)

/*
Dado o array abaixo, gere um novo array com somente os atributos nome e media.
*/
let alunos10 =
[
    {matricula: 10, nome: "Pedro", media: 7},
    {matricula: 12, nome: "Rita", media: 4},
    {matricula: 13, nome: "Carlos", media: 5},
    {matricula: 14, nome: "Rosa", media: 6},
]
let novosAlunos10 = alunos10.map(aluno =>
{
    const {nome, media} = aluno
    return {nome, media}
})
console.log(alunos10)
console.log(novosAlunos10)

