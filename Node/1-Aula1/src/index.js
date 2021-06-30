const express = require("express")
const app = express()

//          Métodos https: get (buscar uma informação), put, post, delete
//  http://localhost:3333
/*
app.get("/alunos", (request, response) => // app.get("/alunos", (req, res) => 
{ 
    return response.json ({message: "Hello World!!"}) 
})
*/

//                              Caso tiver uma Querry
//  http://localhost:3333/alunos?name
//  http://localhost:3333/alunos?name=Joao (defina um nome)
//  request.query.name
/*
app.get("/alunos", (request, response) =>
{
    const name = request.query.name
    console.log(name) 
})
*/

//                                  Desestruturado
//  request.query
/*
app.get("/alunos", (request, response) => 
{
    const {name} = request.query
    return response.json({messange: `Hello ${name}`})
})
*/

//                                Parametro na Rota
//  http://localhost:3333/alunos/2
//  request.params
app.get("/alunos/:matricula", (request, response) =>
{
    const {matricula} = request.params
    return response.json ({message: `Buscando o aluno com matricula ${matricula}`})
})

// localhost: 3333 ou 127.0.0.1:3333
app.listen(3333, () => 
{
    console.log("Servidor rodando!!")
})

