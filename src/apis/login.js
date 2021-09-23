import axios from "axios";

const url = 'http://54.197.100.217/admin/login'
const loginApi = axios.create({ baseURL: url })


export default loginApi;
