import axios from 'axios';

//exportando a constante
export const api = axios.create({
    baseURL: 'http://localhost:3333/'
})