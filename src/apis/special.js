import axios from "axios";


// const url = 'http://fdc5-116-206-42-95.ngrok.io/admin/special-treatments'
const url = 'http://localhost:4000/admin/special-treatments'
const token = localStorage.getItem('access_token')

const specialApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default specialApi;
