const { request } = require("express")
const express = require("express")
const app = express()

// https://localhost/funcionarios?salario=2000

app.get("/funcionarios", (request, response) =>
{
    const {salario} = request.query
    console.log(salario)

    let inss = salario * 0.11

    let irf

    if (salario < 1000)
    {
        irf = 0
    }
    else if (salario >= 1000 && salario < 2000)
    {
        irf = salario * 0.07
    }
    else if (salario >= 2000 && salario < 5000)
    {
        irf = salario * 0.09
    }
    else if (salario >= 5000 && salario < 7000)
    {
        irf = salario * 0.11
    }
    else (salario >= 7000)
    {
        irf = salario * 0.13
    }

    let fgts = salario * 0.08

    let liquido = salario - inss - irf

    const funcionarios = 
    {
        Salario: salario,
        Inss: inss,
        Irf: irf,
        FGTS: fgts,
        SalarioLiquido: liquido 
    }

    return response.json(funcionarios)
})

app.listen(3333 , () =>
{
    console.log("Servidor Rodando!!!")
})