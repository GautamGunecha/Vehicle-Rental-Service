import axios from 'axios'

const server = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export default server