import React from 'react'

const Persons = ({persons, removePerson}) => {
  return (
    <ul>
      {persons.map((p, i) => 
      <>
      <li key={p.id}>{i} => {p.name} : {p.number}</li>
      <button onClick={removePerson} id={p.name} >Remove</button>
      </>
      )}
    </ul>
  )
}

export default Persons