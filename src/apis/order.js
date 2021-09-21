import axios from "axios";

const url = "http://d81d-116-206-39-107.ngrok.io/admin/orders";
const token = localStorage.getItem("access_token");
const orderApi = axios.create({
	baseURL: url,
	headers: {
		access_token: token,
	},
});

export default orderApi;
