import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

import axios from 'axios'
import phoneBookService from './services/phonebook'

const App = () => {

  const [persons, setPersons] = useState([])
  const [personsFilter, setPersonsFilters] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(res => {
      setPersons(res.data)
    })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const filterNames = (event) => {
    if (event.target.value !== '') {
      setPersonsFilters(persons.filter(p => p.name.includes(event.target.value)))
    } else {
      setPersons(persons)
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    let person = {
      name: newName,
      number: newPhone
    }

    if (persons.find(p => p.name === person.name)) {
      alert(`${person.name} is already added to phonebook`)
    } else {
      persons.push(person)
      phoneBookService.create(person).then(() => {})
      setPersons(persons => [...persons])
    }
  }

  const removePerson = (event) => {
    let index = persons.findIndex(p => p.name === event.target.id)
    let deletePerson = persons.splice(index, 1)
    setPersons(persons.filter(p => p.name !== deletePerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter fun={filterNames} />

      <h3>Add new</h3>

      <Form submit={addPerson} name={handleNameChange} phone={handlePhoneChange} />

      <h2>Numbers</h2>

      <Persons persons={personsFilter.length ? personsFilter : persons} removePerson={removePerson} />

    </div>
  )
}

export default App