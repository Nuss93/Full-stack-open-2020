import React, { Children, useState } from 'react'

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

    console.log(persons, input);

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

  const displayPersons = () => {
    let display
    let filteredData = persons.filter(a => a.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)

    display =
    <ul>
      {filteredData.map((data,index) => <li key={index}>{data.name} {data.number}</li>)}
    </ul>

    return display
  }
  return (
    <div>
      <h2 className="m-0">Search Phonebook</h2>
      <div className="mb-4">
        Search : <input name="search" type="text" onChange={handleSearch} value={search} />
      </div>

      <h2 className="m-0">Add New Contact</h2>
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

      <h2>Phone Numbers</h2>
      {displayPersons()}
    </div>
  )
}

export default App