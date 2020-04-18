import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-bth-nascimento.herokuapp.com/',
})

export default api;
