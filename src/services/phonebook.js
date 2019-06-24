import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const getPerson = async id => {
  const request = axios.get(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}

const create = async newPerson => {
  const request = axios.post(baseUrl, newPerson)
  const response = await request
  return response.data
}

const update = async updatedPerson => {
  const request = axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson )
  const response = await request
  return response.data
}

const remove = async id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}

export default { getAll, getPerson, create, update, remove }