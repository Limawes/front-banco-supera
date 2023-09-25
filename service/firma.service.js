import axios from "axios";

//CRIAR

const CriarTrabalhador = () => {
  const API_URL = 'http://localhost:8080/api/v1/trabalhador'
  return axios.post(
    API_URL,
    {
      nomeTrabalhador,
      cpf
    }
  )
}

const CriarSetor = (nomeSetor, descricao) => {
  const API_URL = 'http://localhost:8080/api/v1/setor'
  return axios.post(
    API_URL,
    {
      nomeSetor,
      descricao,
    }
  )
}

const CriarCargo = (nomeCargo, setor_id) => {
  console.log(nomeCargo, setor_id)
  const API_URL = 'http://localhost:8080/api/v1/cargo'
  return axios.post(
    API_URL,
    {
      nomeCargo,
      setor_id,
    }
  )
}


//LISTAR

const listTrabalhador = () => {
  const API_URL = 'http://localhost:8080/api/v1/trabalhador'

  return axios.get(API_URL)
}

const listSetor = () => {
  const API_URL = 'http://localhost:8080/api/v1/setor'
  return axios.get(API_URL)
}

const listCargo = () => {
  const API_URL = 'http://localhost:8080/api/v1/cargo'
  return axios.get(API_URL)
}

const FirmaService = {
  //CRIAR
  CriarSetor,
  CriarCargo,
  CriarTrabalhador,
  //LISTAR
  listSetor,
  listCargo,
  listTrabalhador
}

export default FirmaService