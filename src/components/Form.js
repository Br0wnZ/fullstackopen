import React from 'react'

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

export default Form