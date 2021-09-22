import axios from "axios";

// const url = 'http://fdc5-116-206-42-95.ngrok.io/admin/perfumes'
const url = 'http://localhost:4000/admin/perfumes'
const token = localStorage.getItem('access_token')
const perfumeApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token
    }
})

export default perfumeApi