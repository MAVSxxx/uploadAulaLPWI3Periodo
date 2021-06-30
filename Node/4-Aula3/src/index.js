const { request, response } = require("express")
const express = require("express")
const app = express()

app.use (express.json())

let alunos = ["Carla", "Fábio", "Guilherme", "Sabrina"]

///////////////////////////////////////////////////////////////////////////////////////
//                          Middlewares global e local
//  Middleware local
const checkIndexInArray = (request, response, next) =>
{
    const {indice} = request.params
    if (indice >= alunos.length)
    {
        return response
            .status(400)
            .json({erro: "Não existe aluno com este índice!!!"})
    }
    return next()
}

//  Middleware global
app.use((request, response, next) =>
{
    console.log("A requisição foi chamada!!!")
    return next()
})

/////////////////////////////////////////////////////////////////////////////////////
// Lista todos os alunos
app.get("/alunos", (request, response) =>
{
    //return response.status(200).json(alunos)
    return response
        .status(200)
        .json(alunos)
})

//////////////////////////////////////////////////////////////////////////////////////////

//  Listar o aluno pelo indice
app.get("/alunos/:indice", checkIndexInArray, (request, response) =>
{
    const {indice} = request.params
    return response
        .status (200)
        .json (alunos[indice])
})

///////////////////////////////////////////////////////////////////////////////////////////
//  Criar aluno
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
app.put ("/alunos/:indice", (request,response) =>
{
    const {indice} = request.params
    const {name} = request.body
    alunos[indice] = name
    return response
        .status(200)
        .json(alunos) 
})

//////////////////////////////////////////////////////////////////////////////////////
//  Excluir aluno
app.delete("/alunos/:indice", checkIndexInArray, (request, response) =>
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