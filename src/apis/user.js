import axios from "axios";

const url = ''
const token = localStorage.getItem('access_token')
const userApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token
    }
})

export default userApi