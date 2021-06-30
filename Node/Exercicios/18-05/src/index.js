const express = require('express')
const app = express()

app.use(express.json())

let alunos = ['Maria', 'Joaquim', 'Fernando']

// rota /alunos - get - listar todos os alunos
// http://localhost:3333/alunos

app.get('/alunos', (request, response) => {
  //return response.status(200).json(alunos)
  return response
    .status(200)
    .json(alunos)
})

// listar o aluno pelo indice
// rota /alunos/0 - lista o aluno pelo índice
// http://localhost:3333/alunos/0
// todo parâmetro na rota - request.params

app.get('/alunos/:indice', (request, response) => {
  const { indice } = request.params
  return response
    .status(200)
    .json(alunos[indice])
})

// Criar aluno
// rota /alunos - inserir o aluno no array
// http://localhost:3333/alunos - post
// request.body
app.post('/alunos', (request, response) => {
  const { name } = request.body
  //alunos.push(name)
  alunos = [...alunos, name]
  return response
    .status(200)
    .json(alunos)
})

// Alterar aluno
// rota /alunos - alterar o aluno no array
// http://localhost:3333/alunos/0 - put
// request.body

app.put('/alunos/:indice', (request, response) => {
  const { indice } = request.params
  const { name } = request.body
  alunos[indice] = name
  return response
    .status(200)
    .json(alunos)
})

// Excluir aluno
// rota /alunos - excluir o aluno no array
// http://localhost:3333/alunos/0 - delete
// request.params

app.listen(3333, () => {
  console.log('Servidor rodando!!')
})