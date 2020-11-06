import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ handleSearch, search }) => {
  return (
    <div className="mb-4">
      Find country : <input name="search" type="text" onChange={handleSearch} value={search} />
    </div>
  )
}

const DisplayCountry = ({ countries, search }) => {
  const [selected, setSelected] = useState({})

  let filteredData = countries.filter(a => a.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  console.log(filteredData);

  const selectCountry = (select) => {
    console.log(select);
    setSelected(select)
  }

  if(filteredData.length > 10){
    return <div>Too many matches, please be more specific.</div>
  }
  if(filteredData.length === 1 || selected.name){
    let data = filteredData.length === 1 ? filteredData[0] : selected
    return (
      <div>
        <h3 className="m-0 mb-2">{data.name}</h3>
        <img src={data.flag} width="35%" />
        <p className="mb-2">
          Capital : {data.capital}<br/>
          Population : {data.population}  
        </p>
        <h5 className="m-0">Languages</h5>
        <ul>
          {data.languages.map((item,index) => <li key={index}>{item.name}</li>)}
        </ul>

        {selected.name ? <button className="btn btn-warning" onClick={() => {setSelected({})}}>Back</button> : null}
      </div>
    )
  }
  return filteredData.map((data,index) => (
    <div key={index} className="mb-1">
      {data.name}
      <button className="btn btn-info btn-sm ml-3" onClick={() => {selectCountry(data)}}>Show More</button>
    </div>
  ))
}

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleSearch = (evt) => {
    let newInput = evt.target.value
    
    setSearch(newInput)
  }

  return (
    <div>
      Country!
      <Filter handleSearch={handleSearch} search={search} />

      <DisplayCountry countries={countries} search={search} />
    </div>
  )
}

export default App
