import axios from "axios";

const url = 'http://54.197.100.217/admin/special-treatments'
const token = localStorage.getItem('access_token')

const specialApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default specialApi;
