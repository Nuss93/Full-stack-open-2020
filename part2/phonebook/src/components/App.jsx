import React, { Children, useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '0123456789' }
  ]) 
  // form data controll
  // const [ input, setNewInput ] = useState('')
  const [ input, setNewInput ] = useState({ name: '', number: '' })

  const handleChange = (evt) => {
    let newInput = {
      ...input,
      [evt.target.name] : evt.target.value
    }
    
    setNewInput(newInput)
  }

  const submitPerson = (event) => {
    event.preventDefault()

    console.log(persons, input);

    let CHECKER = persons.findIndex(a => a.name.toLowerCase() === input.name.toLowerCase())

    if(CHECKER !== -1){
      alert(`${input} is already added to phonebook`)
      setNewInput('')
      return
    }

    let newPersons = [...persons]
    let newData = input
    newPersons.push(newData)

    setPersons(newPersons)
    setNewInput({ name: '', number: '' })
  }

  return (
    <div>
      <h2 className="m-0">Phonebook</h2>
      <form onSubmit={submitPerson} className="mb-4">
        <div>
          Name: <input name="name" type="text" onChange={handleChange} value={input.name} />
        </div>
        <div>
          Number: <input name="number" type="number" onChange={handleChange} value={input.number} />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((data,index) => <li key={index}>{data.name} {data.number}</li>)}
      </ul>
    </div>
  )
}

export default App