import axios from "axios";

// const url = "http://fdc5-116-206-42-95.ngrok.io/admin/users";
const url = "http://localhost:4000/admin/users";
const token = localStorage.getItem("access_token");
const userApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default userApi;
