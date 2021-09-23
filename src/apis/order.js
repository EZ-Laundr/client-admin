import axios from "axios";

const url = 'http://54.197.100.217/admin/orders'
const token = localStorage.getItem('access_token')

const orderApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default orderApi;
