import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

import phoneBookService from './services/phonebook'

const App = () => {

  const [persons, setPersons] = useState([])
  const [personsFilter, setPersonsFilters] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  useEffect(() => {
    phoneBookService.getAll().then(res => setPersons(res))
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
      let per = { ...persons.find(p => p.name === person.name), number: newPhone }
      window.confirm(`${person.name} is already added to phonebook, replace
      the old number with a new one?`)
      phoneBookService.update(per)
        .then(() => { phoneBookService.getAll().then(() => { }) })
    } else {
      phoneBookService.create(person).then(() => {
        phoneBookService.getAll().then(res => setPersons(res))
      })
    }
  }

  const removePerson = (event) => {
    phoneBookService.getPerson(event.target.id).then(res => {
      window.confirm(`Delete ${res.name}?`)
      phoneBookService.remove(res.id).then(() =>
        phoneBookService.getAll().then(res => setPersons(res)))
    })
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