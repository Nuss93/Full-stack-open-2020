import React, { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'
import personService from '../services/persons'

const Filter = ({ handleSearch, search }) => {
  return (
    <div className="mb-4">
      Search : <input name="search" type="text" onChange={handleSearch} value={search} />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  // form data controll
  const [ input, setNewInput ] = useState({ name: '', number: '' })
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    console.log('effect')
    
    personService.getAll().then(response => {
      setPersons(response)
    })
  }, [])

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
      let r = window.confirm(`${input.name} is already added to the phonebook, do you want to replcae the old number with the new one?`)
      if(!r){ 
        setNewInput({ name: '', number: '' })
        return
      } else {
        let newPersons = [...persons]
        newPersons[CHECKER] = { ...persons[CHECKER], number : input.number }

        const PERSONS = newPersons[CHECKER]
        const changedPerson = { ...PERSONS, number : input.number }

        personService.updateNumber(CHECKER + 1, changedPerson).then(() => {
          setPersons(newPersons)
          setNewInput({ name: '', number: '' })
        })
        return
      }
    }
    console.log('contingency');

    let newPersons = [...persons]
    let newData = { ...input, id: newPersons.length + 1 }
    newPersons.push(newData)

    personService.createPerson(input).catch(err => {
      console.log(err.message);
    })

    setPersons(newPersons)
    setNewInput({ name: '', number: '' })
  }
  const deletePerson = data => {
    let r = window.confirm(`Are you sure you want to delete the contact ${data.name}?`)
    if(!r){ return }
    
    let newPersons = [...persons]

    personService.deletePerson(data.id).then(() => {
      newPersons.splice(data.id - 1, 1)
      setPersons(newPersons)
    }).catch(err => console.log(err.message))
  }
  return (
    <div>
      <h2 className="m-0">Search Phonebook</h2>
      <Filter handleSearch={handleSearch} search={search} />

      <h2 className="m-0">Add New Contact</h2>
      <PersonForm submitPerson={submitPerson} handleChange={handleChange} input={input} />

      <h2>Phone Numbers</h2>
      <Persons persons={persons} search={search} deletePerson={deletePerson} />
    </div>
  )
}

export default App