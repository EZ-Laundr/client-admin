import axios from "axios";

const url = 'http://localhost:3004/specials'
const specialApi = axios.create({ baseURL: url })

export default specialApi