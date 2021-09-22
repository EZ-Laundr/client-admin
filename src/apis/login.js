import axios from "axios";

const url = "http://192.168.1.12:4000/admin/login";
const loginApi = axios.create({ baseURL: url });

export default loginApi;
