import axios from "axios";

const url = 'http://localhost:3004/orders'
const orderApi = axios.create({ baseURL: url })

export default orderApi