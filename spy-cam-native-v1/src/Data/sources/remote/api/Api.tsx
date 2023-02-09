import axios from 'axios'

export const Api = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    headers: {
        'Content-type': 'application/json'
    }
})