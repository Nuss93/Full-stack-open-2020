import React from 'react'

const Persons = ({ persons, search }) => {
    const filteredData = persons.filter(a => a.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    return (
        <ul>
            {filteredData.map((data,index) => <li key={index}>{data.name} {data.number}</li>)}
        </ul>
    )
}

export default Persons
