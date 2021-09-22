import axios from "axios";

// const url = 'http://fdc5-116-206-42-95.ngrok.io/admin/orders'
const url = 'http://localhost:4000/admin/orders'
const token = localStorage.getItem('access_token')
const orderApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token
    }
})

export default orderApi