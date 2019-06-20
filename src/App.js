import React, { useState } from 'react'

const Filter = ({fun}) =>  {
  return (
  <input onChange={fun}/> 
  )
}

const Form = ({submit, name, phone}) => {
  return (
    <form onSubmit={submit}>
        <div>
          name: <input onChange={name} />
        </div>
        <div>
          phone: <input onChange={phone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map((p, i) => <li key={i}>{p.name} : {p.phone}</li>)}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '123456789' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const filterNames = (event) => {
    if (event.target.value !== '') {
      setPersons(persons.filter(p => p.name.includes(event.target.value)))
    } else {
      setPersons(persons)
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    let person = {
      name: newName,
      phone: newPhone
    }

    if (persons.find(p => p.name === person.name)) {
      alert(`${person.name} is already added to phonebook`)
    } else {
      persons.push(person)
      setPersons(persons => [...persons])
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter fun={filterNames}/>

      <h3>Add new</h3>

      <Form submit={addPerson} name={handleNameChange} phone={handlePhoneChange}/>
      
      <h2>Numbers</h2>

      <Persons persons={persons} />
      
    </div>
  )
}

export default App