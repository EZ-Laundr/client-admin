import axios from "axios";

const url = "http://d81d-116-206-39-107.ngrok.io/admin/users";
const token = localStorage.getItem("access_token");
const userApi = axios.create({
	baseURL: url,
	headers: {
		access_token: token,
	},
});

export default userApi;
