import React, { useState, useEffect } from 'react'
import axios from 'axios'
const weatherstack_accesKey = process.env.REACT_APP_WEATHER_API_KEY
const weatherBaseURL = 'http://api.weatherstack.com/'
const countriesBaseURL = 'https://restcountries.eu/rest/v2/all'

console.log(weatherstack_accesKey)
const Filter = ({ handleSearch, search }) => {
  return (
    <div className="mb-4">
      Find country : <input name="search" type="text" onChange={handleSearch} value={search} />
    </div>
  )
}

const DisplayCountry = ({ countries, search }) => {
  const [selected, setSelected] = useState({})
  const [weather, setWeather] = useState(null)
  let filteredData = countries.filter(a => a.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)

  useEffect(() => {
    // console.log(weather);

    if((filteredData.length === 1 || selected.name) && weather === null){
      let country_name = filteredData.length === 1 ? filteredData[0].name : selected.name

      axios.get(`${weatherBaseURL}/current?access_key=${weatherstack_accesKey}&query=${country_name}`).then(response => {
        setWeather(response.data)
        console.log(response.data);
      })
    }
    
    // return () =>  setWeather(null)
  }, [selected, filteredData])

  useEffect(() => {
    if(search === ""){
      setWeather(null)
    }
  }, [search])

  const selectCountry = (select) => {
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

        {weather !== null ?
          <div>
            <h4 className="m-0 mb-2">Weather in {weather.location.country}</h4>
            <img src={weather.current.weather_icons[0]} />
            <p>Temperature : {weather.current.temperature}</p>
            <p>Wind : {weather.current.wind_speed} mph direction {weather.current.win_dir}</p>
            <small>Last updated today @ {weather.current.observation_time}</small>
          </div> : null
        }
        

        {selected.name ? <button className="btn btn-warning" onClick={() => {
          setWeather(null)
          setSelected({})
        }}>Back</button> : null}
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
    axios.get(countriesBaseURL).then(response => {
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
