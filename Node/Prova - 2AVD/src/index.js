const { response, request } = require("express")
const express = require ("express")
const app = express()
app.use(express.json())
const uuid = require("uuid")

///////////////////////////////////////////////////////////////////
//  Middleware local
const checkIndexInArray = (request, response, next) =>
{
    const {id} = request.params
    if (id >= despesas.length)
    {
        return response
            .status(400)
            .json({erro: "Não existe este ID!!!"})
    }
    return next()
}
//  Middleware global
app.use((request, response, next) =>
{
    console.log("A requisição foi chamada!!!")
    return next()
})

///////////////////////////////////////////////////////////////////

let resp = [
    {
        id: uuid.v4(),
        nome: "Fabio",
        telefone: 087982456
    }
]

////////////////////////////////////////////////////////////////////
//  Inserir responsavel
//  http://localhost:3333/responsavel
app.post("/responsavel", (request, response) =>
{
    const {nome, telefone} = request.body
    const responsavel = {
        id: uuid.v4(),
        nome,
        telefone
    }
    resp = [...resp, responsavel]
    return response
        .status(200)
        .json(resp)
})

////////////////////////////////////////////////////////////////////

//  Lista array responsavel
//  http://localhost:3333/responsavel
app.get("/responsavel", (request, response) =>
{
    return response
        .status(200)
        .json(resp)
})

////////////////////////////////////////////////////////////////////

let despesas = [{
    id: uuid.v4(),
    data_de_compra: "05/04/2021",
    local_de_compra: "Americ",
    valor: 150.00,
    id_do_responsavel: 0000
}]

//  Incluir despesa
// http://localhost:3333/despesas
app.post("/despesas", (request, response) =>
{
    const {data_de_compra, local_de_compra, valor, id_do_responsavel} = request.body
    const desp = 
    {
        id: uuid.v4(),
        data_de_compra,
        local_de_compra,
        valor,
        id_do_responsavel, 
    }
    despesas = [...despesas, desp]
    return response
        .status(200)
        .json(despesas)
})

////////////////////////////////////////////////////////////////////
//  Listar despesas
app.get("/despesas", (request, response) =>
{
    return response
        .status(200)
        .json(despesas)
})

////////////////////////////////////////////////////////////////////
//Listar despesas pelo ID
app.get("/despesas/:id", checkIndexInArray, (request, response) =>
{
    const {id} = request.params
    return response
        .status(200)
        .json(despesas[id])
})

////////////////////////////////////////////////////////////////////
//Excuir despesas pelo ID
app.delete("/despesas/:id", checkIndexInArray, (request, response) =>
{
    const {id} = request.params
    despesas.splice(id, 1)
    return response
        .status(200)
        .json(despesas)
})

///////////////////////////////////////////////////////////////////
// Alterar o gasto
app.put("/despesas/:id", checkIndexInArray, (request, response) =>
{
   
    
})

//////////////////////////////////////////////////////////////////

app.listen (3333, () =>
{
    console.log("Servidor Rodando!!!")
})