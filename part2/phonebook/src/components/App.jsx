import React, { useState } from 'react'
import PersonForm from './PersonForm'
import Persons from './Persons'

const Filter = ({ handleSearch, search }) => {
  return (
    <div className="mb-4">
      Search : <input name="search" type="text" onChange={handleSearch} value={search} />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  // form data controll
  const [ input, setNewInput ] = useState({ name: '', number: '' })
  const [ search, setSearch ] = useState('')

  const handleChange = (evt) => {
    let newInput = {
      ...input,
      [evt.target.name] : evt.target.value
    }
    
    setNewInput(newInput)
  }
  const handleSearch = (evt) => {
    let newInput = evt.target.value
    
    setSearch(newInput)
  }

  const submitPerson = (event) => {
    event.preventDefault()

    let CHECKER = persons.findIndex(a => a.name.toLowerCase() === input.name.toLowerCase())

    if(CHECKER !== -1){
      alert(`${input.name} is already added to phonebook`)
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
      <h2 className="m-0">Search Phonebook</h2>
      <Filter handleSearch={handleSearch} search={search} />

      <h2 className="m-0">Add New Contact</h2>
      <PersonForm submitPerson={submitPerson} handleChange={handleChange} input={input} />

      <h2>Phone Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App