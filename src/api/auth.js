import axios from "axios";
import { URL } from "../constant";

class Auth {
	constructor() {
		this.instance = axios.create({
			// baseURL: URL,
			timeout: 60000,
		});
	}

	createHeader() {
		return { "Authorization": `Bearer ${localStorage.getItem("token")}` };
	}

	async register({ username, password, email }) {
		try {
			const req = await this.instance({
				method: "post",
				url: "/api/user/register",
				data: {
					username,
					password,
					email,
				},
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
			localStorage.setItem("token", req.data?.token);
			return req.data;
		} catch (error) {
			throw error;
		}
	}


	async logout(){
		localStorage.setItem("token","Bearer")
	}

	async getUser() {
		try {
			const req = await this.instance({
				method: "post",
				url: "/api/user/me",
				headers: this.createHeader(),
			});
			return req.data;
		} catch (error) {
			throw error;
		}
	}
}

const auth = new Auth();

export default auth;
