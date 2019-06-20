import React from 'react'

const Persons = ({persons, removePerson}) => {
  return (
    <ul>
      {persons.map((p, i) => 
      <>
      <li key={i}>{i} => {p.name} : {p.phone}</li>
      <button onClick={removePerson} id={p.name} >Remove</button>
      </>
      )}
    </ul>
  )
}

export default Persons