import axios from "axios";

<<<<<<< HEAD
const url = "http://bf5c-116-206-43-75.ngrok.io/admin/users";
=======

// const url = "http://fdc5-116-206-42-95.ngrok.io/admin/users";
const url = "http://localhost:4000/admin/users";

>>>>>>> ecfd4625fcf74b4d2618f571c148086f5248bd34
const token = localStorage.getItem("access_token");
const userApi = axios.create({
    baseURL: url,
    headers: {
        access_token: token,
    },
});

export default userApi;
