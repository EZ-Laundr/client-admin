import axios from "axios";

const url = 'http://54.197.100.217/admin/perfumes'
const token = localStorage.getItem('access_token')

const perfumeApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default perfumeApi;
