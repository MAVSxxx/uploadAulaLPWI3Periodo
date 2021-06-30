const express = require('express') // carrega o express e o armazena na variável express
const app = express() // executa a função do express e o armazena na variável app

/*
app.get('/alunos', (request, response) => {
  return response.json({ message: 'Hello World !!' })
})
*/

// Query Params
// http://localhost:3333/alunos?name=Joao
// request.query
app.get('/alunos', (request, response) => {
  //const name = request.query.name // cria a variável name para receber o conteúdo da query.name
  const { name } = request.query // desestrutura o name do request.query
  return response.json({ message: `Hello ${name}` })
})

// Route Params
// http://localhost:3333/alunos/2
// request.params

app.get('/alunos/:matricula', (request, response) => {
  const { matricula } = request.params
  return response.json({ message: `Buscando o aluno com matricula ${matricula}` })
})

app.listen(3333, () => { // inicia o servidor na porta 3333
  console.log('Servidor rodando!!')
})


// localhost:3333/alunos ou 127.0.0.1:3333/alunos
// métodos https: get, put, post, delete
/*

app.get('/alunos', (req, res) => {

})
// json web viewer
*/

// query params
// localhost:3333/alunos?name=Joao

// code runner

// yarn add nodemon -D - instala o nodemon como dependência de desenvolvimento

// yarn nodemon src/index.js 

/*
Cria a pasta da aplicação
crie o arquivo package.json - yarn init -y
Instala o express
Criar a pasta src
Crie o arquivo src/index.js
Crie o código
Instala o nodemon como dependência de desenvolvimento
Cria o script
Inicia a aplicacão utilizando o script
faça os testes
*/