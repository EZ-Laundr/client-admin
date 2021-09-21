import axios from "axios";

const url = "http://d81d-116-206-39-107.ngrok.io/admin/login";
const loginApi = axios.create({ baseURL: url });

export default loginApi;
