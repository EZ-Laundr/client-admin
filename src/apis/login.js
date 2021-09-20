import axios from "axios";

const url = 'http://localhost:4000/admin/login'
const loginApi = axios.create({ baseURL: url })

export default loginApi