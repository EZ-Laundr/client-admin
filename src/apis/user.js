import axios from "axios";

const url = "http://192.168.1.12:4000/admin/users";
const token = localStorage.getItem("access_token");
const userApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default userApi;
