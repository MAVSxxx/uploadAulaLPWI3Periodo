const express = require('express')
const app = express()
app.use(express.json())
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
  // e quando não encontra o dataAVD recebe um array vazio
  // array com objeto - verdadeiro dataAVD = [ { id: '10101', nome:'Maria Lucia'}]
  // array vazio - verdadeiro dataAVD = []
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
  // e quando não encontrar o dataAVD recebe um undefined 
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

const verificaCadastro = (request, response, next) => {
  const { dia_semana, data_avd, disciplina, horario, professor } = request.body
  if (!dia_semana || !data_avd || !disciplina || !horario || !professor) {
    return response
      .status(400)
      .json({
        Error:
          'Favor preencher o campo dia semana ou data avd ou horário ou professor '
      })
  }
  return next()
}

const verificaProfessor = (request, response, next) => {
  const { nomeProfessor } = request.query
  const dadosProfessor = professores.filter(prof => prof.professor === nomeProfessor)
  //console.log(dadosProfessor)
  if (dadosProfessor.length === 0) {
    return response
      .status(400)
      .json({ Error: 'Nome do Professor Inexistente !!' })
  }

  return next()
}

const verificaDisciplina = (request, response, next) => {
  const { nomeDisciplina } = request.query
  const dadosDisciplina = professores.filter(prof => prof.disciplina === nomeDisciplina)
  //console.log(dadosDisciplina)
  if (dadosDisciplina.length === 0) {
    return response
      .status(400)
      .json({ Error: 'Nome da Disciplina Inexistente !!' })
  }

  return next()
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

app.post('/professores', verificaCadastro, (request, response) => {
  const { dia_semana, data_avd, disciplina, horario, professor } = request.body
  const dadosProfessor = {
    id: uuid.v4(),
    dia_semana,
    data_avd,
    disciplina,
    horario,
    professor
  }
  //professores.push(dadosProfessor)
  // conceito da imutabilidade
  // ... spread operator - espalhar 
  professores = [...professores, dadosProfessor]
  return response
    .status(200)
    .json(dadosProfessor)
})

app.put('/professores/:id', CheckIdInArray, verificaCadastro, (request, response) => {
  const { dia_semana, data_avd, disciplina, horario, professor } = request.body
  const { id } = request.params
  let indice = professores.findIndex(professor => professor.id === id)
  const dadosProfessor = {
    id,
    dia_semana,
    data_avd,
    disciplina,
    horario,
    professor
  }

  professores.splice(indice, 1, dadosProfessor)
  return response
    .status(200)
    .json(dadosProfessor)
})

/*
http://localhost:3333/professores/30303030303
método: delete
request.params
*/
app.delete('/professores/:id', CheckIdInArray, (request, response) => {
  const { id } = request.params
  const indice = professores.findIndex(professor => professor.id === id)
  console.log(indice)
  console.log(professores[indice])
  professores.splice(indice, 1)
  return response
    .status(200)
    .json({ message: 'Registro excluído com sucesso !!!!' })
})

app.get('/professoresavd', verificaProfessor, (request, response) => {
  const { nomeProfessor } = request.query
  //console.log(nomeProfessor)
  const dadosProfessor = professores.filter(prof => prof.professor === nomeProfessor)
  return response
    .status(200)
    .json(dadosProfessor)
})

app.get('/professoresavd2', verificaDisciplina, (request, response) => {
  const { nomeDisciplina } = request.query
  //console.log(nomeDisciplina)
  const dadosDisciplina = professores.filter(prof => prof.disciplina === nomeDisciplina)
  return response
    .status(200)
    .json(dadosDisciplina)
})


app.listen(3333, () => {
  console.log('Servidor rodando!!')
})