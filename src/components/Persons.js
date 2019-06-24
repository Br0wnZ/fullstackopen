import React from 'react'

const Persons = ({ persons, removePerson }) => {
  return (
    <ul>
      {persons.map((p, i) =>
        <li key={p.id}>{i} => {p.name} : {p.number}
          <button onClick={removePerson} id={p.id} >Remove</button>
        </li>
      )}
    </ul>
  )
}

export default Persons