const { response, request } = require("express")
const express = require ("express")
const app = express ()
const uuid = require ("uuid")

app.use (express.json ())

//  Middlewares
app.use ((request, response, next) =>
{
    console.log ("A requisição foi chamada!!!")
    return next ()
})

const checkIndInArray = (request, response, next) =>
{
    const {indice} = request.params
    const funcionario = colaboradores.find (colab => colab.indice === indice)
    if (!funcionario)
    {
        return response
            .status (400)
            .json ({erro: "O ID não existe!!!"})
    }
    return next ()
}

const verificaInclusão = (request, response, next) =>
{
    const {nome, funcao, salario} = request.body
    if (!nome || !funcao || !salario)
    {
        return response
            .status (400)
            .json ({Erro: "Por favor, preencha todos os campos corretamente!!!"})
    }
    return next()
}

//  Criação do array:

let colaboradores = [
    {indice: uuid.v4 (), nome: "Lalisa Manoban", funcao: "Desenvolvedora", salario: 3200},
    {indice: uuid.v4 (), nome: "Jackson Wang", funcao: "Administrador", salario: 2100}
]

//  Rota para incluir um funcionario no array
//  json com nome, função e salario
//  caso não envie alguma informação apresente uma advertencia ao usuario.

app.post ("/funcionarios", verificaInclusão, (request, response) =>
{
    const {nome, funcao, salario} = request.body
    const funcionarios = {
        indice: uuid.v4 (),
        nome,
        funcao,
        salario
    }
    colaboradores = [...colaboradores, funcionarios]
    return response
        .status(200)
        .json(colaboradores)
})

//  Rota para listar todos os funcionarios
//  Retornando id, nome, função, salario, inss, irf, fgts, irf e salario liquido

app.get ("/funcionarios", (request, response) =>
{
    const {salario} = request.query

    //  Inss
    let inss 

    if (salario < 1000)
    {
        inss = salario * 0.08
    }
    else if (salario >= 1000 && salario < 3000)
    {
        inss = salario * 0.10
    }
    else if (salario >= 3000 && salario < 5000)
    {
        inss = salario * 0.12
    }
    else (salario >= 5000)
    {
        inss = salario * 0.14
    }

    // IRF
    let irf

    if (salario < 1000)
    {
        irf = 0
    }
    else if (salario >= 1000 && salario < 5000)
    {
        irf = salario * 0.07
    }
    else (salario >= 5000)
    {
        irf = salario * 0,09
    }

    //  FGTS
    fgts = salario * 0.08

    //  SALARIO LIQUIDO
    liquido = salario - inss - irf

    let saldoFuncionario = {
        inss,
        irf,
        fgts,
        liquido
    }

    return response
        .status(200)
        .json(colaboradores)
})

// Listar por ID
app.get ("/funcionarios/:indice", checkIndInArray, (request, response) =>
{
    const {indice} = request.params
    const funcionario = colaboradores.filter (colab => colab.indice === indice)
    return response
        .status(200)
        .json(funcionario)
})

//  Excluir funcionario
app.delete ("/funcionarios/:indice", checkIndInArray, (request, response) =>
{
    const {indice} = request.params
    const id = colaboradores.findIndex (colab => colab.indice === indice)
    colaboradores.splice(id, 1)

    return response
        .status(200)
        .json({Message: "Registro excluído com sucesso!!!"})
})

//  Alterar funcionario
app.put ("funcionarios/:indice", checkIndInArray, verificaInclusão,  (request,response) =>
{
    const {nome, funcao, salario} = request.body
    const {indice} = request.params
    let id = colaboradores.findIndex(funcionario => funcionario.indice == indice)
    const dadosFuncionario = {
        indice,
        nome,
        funcao,
        salario
    }

    colaboradores.splice(id, 1, dadosFuncionario)

    return response
        .status (200)
        .json(dadosFuncionario)
})

app.get ("/folhaindividual", (request,response) =>
{
    const {nome} = request.query
    const dadosFuncionario = colaborador.find (colab => colab.nome == nomeFuncionario)
    return response
        .status(200)
        .json(dadosFuncionario)
})


app.listen (3333, () =>
{
    console.log ("Servidor Rodando!!!")
})