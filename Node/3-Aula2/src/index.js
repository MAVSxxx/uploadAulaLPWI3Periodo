const express = require("express")
const app = express()

app.use (express.json())

const alunos = ["Maria", "Joaquim", "Fernando"]

/////////////////////////////////////////////////////////////////////////////////////
// rota /alunos - get - listar todos os alunos
// https: //localhost:3333/alunos

app.get("/alunos", (request, response) =>
{
    //return response.status(200).json(alunos)
    return response
        .status(200)
        .json(alunos)
})

//////////////////////////////////////////////////////////////////////////////////////////
//  Listar o aluno pelo indice
//  rota /alunos/0 - listar o aluno pelo indice
//  http://localhost:3333/alunos/0

app.get("/alunos/:indice", (request, response) =>
{
    const {indice} = request.params
    return response
        .status (200)
        .json (alunos[indice])
})

///////////////////////////////////////////////////////////////////////////////////////////
//  Criar aluno
//  rote /alunos  inserir o aluno na array
//  https://localhost:3333/alunos - post
//  request.body

app.post ("/alunos", (request, response) =>
{
    const {name} = request.body
    alunos.push(name)
    return response 
        .status (200)
        .json(alunos)
})

////////////////////////////////////////////////////////////////////////////////////////
//  Alterar aluno
//  rota /alunos - alterar o aluno no array
//  http://localhost:3333/alunos/0 - put
//  request.body

app.put ("/alunos/:indice", (request,response) =>
{
    const {indice} = request.params
    const {name} = request.body
    alunos[indice] = name
    return response
        .status(200)
        .json(alunos) //    Retorna aluno já alterado
})

//////////////////////////////////////////////////////////////////////////////////////

//  Excluir aluno
//  rota /alunos - excluir o aluno no array
//  http://localhost:3333/alunos/0 - delete
//  request.params

app.delete("/alunos/:indice", (request, response) =>
{
    const {indice} = request.params
    alunos.splice(indice, 1)
    return response
        .status(200)
        .json(alunos)
})

///////////////////////////////////////////////////////////////////////////////////////////////


app.listen(3333, () =>
{
    console.log("Servidor Rodando!!!")
})