import axios from "axios";
import { URL } from "../constant";

class Auth {
	constructor() {
		this.instance = axios.create({
			baseURL: URL,
			timeout: 1000,
			transformRequest: [
				function (data, headers) {
					const token = localStorage.getItem("token");
					headers.Authorization = `Bearer ${token}`;
					return data;
				},
			],
		});
	}

	async registerUser({ username, password, email }) {
		try {
			const req = await this.instance({
				method: "post",
				url: "/api/user/register",
				data: {
					username,
					password,
					email,
				},
				transformRequest: [],
			});
			return req.data;
		} catch (error) {
			throw error;
		}
	}

	async login({ username, password }) {
		try {
			const req = await this.instance({
				method: "post",
				url: "/api/user/token",
				data: new URLSearchParams({ username, password }),
			});
			return req.data;
		} catch (error) {
			throw error;
		}
	}

	async getUser() {
		try {
			const req = await this.instance({
				method: "post",
				url: "/api/user/me",
			});
			return req.data;
		} catch (error) {
			throw error;
		}
	}
}

const auth = new Auth();

export default auth;
