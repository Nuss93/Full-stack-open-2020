import React, { Children, useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  // form data controll
  const [ newName, setNewName ] = useState('')

  const handleChange = (evt) => {
    setNewName(evt.target.value)
  }

  const submitName = (event) => {
    event.preventDefault()

    let CHECKER = persons.findIndex(a => a.name.toLowerCase() === newName.toLowerCase())

    if(CHECKER !== -1){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    let newPersons = [...persons]
    let newData = { name : newName }
    newPersons.push(newData)

    setPersons(newPersons)
    setNewName('')
  }

  return (
    <div>
      <h2 className="m-0">Phonebook</h2>
      <form onSubmit={submitName} className="mb-4">
        <div>
          name: <input name="name" onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((data,index) => <li key={index}>{data.name}</li>)}
      </ul>
    </div>
  )
}

export default App