import axios from 'axios';

export const API_URL_CONST = 'http://localhost:7000/api'
const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL_CONST
})

$api.interceptors.request.use(config=>{
    config.headers.Authorization = `Barer ${localStorage.getItem('token')}`
    return config
})

export default $api