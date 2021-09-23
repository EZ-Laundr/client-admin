import axios from "axios";

const url = "http://54.197.100.217/admin/users";
const token = localStorage.getItem("access_token");
const userApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default userApi;
