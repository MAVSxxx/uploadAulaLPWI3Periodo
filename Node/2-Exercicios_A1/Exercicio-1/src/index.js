const { request } = require("express")
const express = require("express")
const app = express()

const tecnologias = ["NodeJS", "ReactJS", "React Native", "Vue" , "Angular"]

app.get("/exerc1/:id", (request, response) =>
{
    const {id} = request.params
    console.log(tecnologias.length)

    if(id >= 0 && id <= tecnologias.length)
    {
        return response.json({tecnologias: `${tecnologias[id]}`})
    }
    else 
    {
        return response.json({tecnologias: "Tecnologia Inexistente!!"})
    }
})

app.listen(3333 , () =>
{
    console.log("Servidor Rodando!!!")
})