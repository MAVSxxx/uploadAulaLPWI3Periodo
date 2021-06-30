const express = require('express')
const app = express()
const uuid = require('uuid')

// yarn add uuid - universal unique identifier - identificador universal único
let professores = [
  {
    id: uuid.v4(), dia_semana: 'segunda-feira', data_avd: '14/06/2021', disciplina: 'LPW I',
    horario: '19:00/22:00', professor: 'Luiz Claudio'
  },
  {
    id: uuid.v4(), dia_semana: 'segunda-feira', data_avd: '21/06/2021', disciplina: 'Estrutura de Dados',
    horario: '20:35/22:15', professor: 'Débora'
  },
]

//console.log(professores)
const CheckIdInArray = (request, response, next) => {
  const { id } = request.params
  const dataAVD = professores.filter(prof => prof.id === id)
  // com o comando filter quando encontra o registro o dataAVD recebe um objeto
  // e quando não o dataAVD recebe um array vazio
  // array com objeto - verdadeiro
  // array vazio - verdadeiro
  console.log(dataAVD)
  if (dataAVD.length === 0) {  // se o dataAVD for verdadeiro
    return response
      .status(400)
      .json({ Error: 'Id Inexistente' })
  }
  return next()

  /*
  const dataAVD = professores.find(prof => prof.id === id)
  console.log(dataAVD)
  // com o comando find quando encontra o registro o dataAVD recebe um objeto
  // e quando não o dataAVD recebe um undefined 
  // undefined - false
  // array com objeto - verdadeiro
  // array vazio - verdadeiro

  if (!dataAVD) {  // se o dataAVD for verdadeiro
    return response
      .status(400)
      .json({ Error: 'Id Inexistente' })
  }
  return next()
  */
}


// http: get - listar todas informações
// rota: /professores
app.get('/professores', (request, response) => {
  return response
    .status(200)
    .json(professores)
})

// Lista todas as datas das provas pelo id
// http: get - busca a informacão pelo id
// rota: /professores/:id - http://localhost:3333/professores/9292929djaak9293
// parâmetro na rota - request.params

app.get('/professores/:id', CheckIdInArray, (request, response) => {
  const { id } = request.params
  const dataAVD = professores.filter(prof => prof.id === id)
  //const dataAVD = professores.find(prof => prof.id === id)
  // banco de dados  findOne(id) ou findById(id)
  return response
    .status(200)
    .json(dataAVD)
})


app.listen(3333, () => {
  console.log('Servidor rodando!!')
})