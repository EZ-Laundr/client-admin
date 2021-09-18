import axios from "axios";

const url = 'http://localhost:3004/perfumes'
const perfumeApi = axios.create({ baseURL: url })

export default perfumeApi