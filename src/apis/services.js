import axios from "axios"

const url = 'http://localhost:4000/admin/services'
const token = localStorage.getItem('access_token')
const servicesApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token
    }
})

export default servicesApi