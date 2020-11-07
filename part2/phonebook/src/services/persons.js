import axios from 'axios';
const baseURL = 'http://localhost:5000/persons';

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}

const createPerson = newPerson => {
    return axios.post(baseURL, newPerson).then(() => console.log('Operation success!'))
}

export default { getAll, createPerson }