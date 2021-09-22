import axios from "axios";

const url = 'http://bf5c-116-206-43-75.ngrok.io/admin/special-treatments'
const token = localStorage.getItem('access_token')

const specialApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default specialApi;
