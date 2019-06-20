import React from 'react'

const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map((p, i) => <li key={i}>{p.name} : {p.phone}</li>)}
    </ul>
  )
}

export default Persons