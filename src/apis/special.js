import axios from "axios";

const url = "http://192.168.1.12:4000/special-treatments";
const token = localStorage.getItem("access_token");
const specialApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default specialApi;
