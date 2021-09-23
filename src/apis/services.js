import axios from "axios";

const url = 'http://54.197.100.217/admin/services'
const token = localStorage.getItem('access_token')

const servicesApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default servicesApi;
