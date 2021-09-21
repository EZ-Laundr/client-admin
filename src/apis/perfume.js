import axios from "axios";

const url = "http://d81d-116-206-39-107.ngrok.io/admin/perfumes";
const token = localStorage.getItem("access_token");
const perfumeApi = axios.create({
	baseURL: url,
	headers: {
		access_token: token,
	},
});

export default perfumeApi;
