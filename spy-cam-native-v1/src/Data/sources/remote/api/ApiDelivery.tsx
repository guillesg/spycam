import axios from 'axios'

const ApiDelivery = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }