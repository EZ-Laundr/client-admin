import axios from "axios";

const url = 'http://bf5c-116-206-43-75.ngrok.io/admin/login'
const loginApi = axios.create({ baseURL: url })


export default loginApi;
