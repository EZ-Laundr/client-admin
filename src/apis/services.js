import axios from "axios"

const url = 'http://localhost:3004/services'
const servicesApi = axios.create({ baseURL: url })

export default servicesApi