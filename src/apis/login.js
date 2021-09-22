import axios from "axios";


// const url = 'http://fdc5-116-206-42-95.ngrok.io/admin/login'
const url = 'http://localhost:4000/admin/login'
const loginApi = axios.create({ baseURL: url })


export default loginApi;
