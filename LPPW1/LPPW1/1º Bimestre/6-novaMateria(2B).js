let funcionarios = 
[
    { nome: 'Ana', salario: 1000 },
    { nome: 'Pedro', salario: 4000 },
    { nome: 'Jose', salario: 3000 },
    { nome: 'Rita', salario: 2000 },    
    { nome: 'Maria', salario: 8000 },    
    { nome: 'Carla', salario: 3000 },  
]

// Ordena pelo nome, em ordem crescente
funcionarios.sort((a, b) => a.nome < b.nome ? -1 : 1)
console.log("Ordem crescente do nome:")
console.log(funcionarios)

// Ordena pelo salario, em ordem crescente
funcionarios.sort((a, b) => a.salario < b.salario ? -1 : 1)
console.log("Ordem crescente do salário:")
console.log(funcionarios)

// Ordena pelo nome, em ordem decrescente
funcionarios.sort((a, b) => b.nome > a.nome ? 1 : -1)
console.log("Ordem decrescente do nome:")
console.log(funcionarios)

// Ordena pelo salario, em ordem decrescente
funcionarios.sort((a, b) => a.salario < b.salario ? 1 : -1).reverse
console.log("Ordem decrescente do salário:")
console.log(funcionarios)

/*
    Outro jeito é:
// Ordena pelo salario, em ordem decrescente
    funcionarios.sort((a, b) => a.salario > b.salario ? -1 : 1).reverse
    console.log("Ordem decrescente do salário:")
    console.log(funcionarios)
*/

