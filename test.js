import axios from "axios";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDZiMmMzYWZlOTQ2NjJlODEyNGVjMSIsInVzZXJuYW1lIjoibmtrIiwiZW1haWwiOiJua0BnbWFpbC5jb20iLCJleHAiOjE3MTE3MTY5MDV9.MefsACAL4QJEMDMAOzextZRsd0aZizuZiEoQe6ObYEo";

class Auth {
	constructor() {
		this.instance = axios.create({
			baseURL: "http://127.0.0.1:8000",
			timeout: 1000,
		});
	}

	createHeader() {
		return { Authorization: `Bearer ${token}` };
	}

	async uploadInDb({ title, description, contenType }) {}

	async uploadInAws(file, url) {}

	async afterUpload(status, fileUri) {}

	async upload({ title, description, contenType, file}) {}
}

const auth = new Auth();

auth.getUser().then((res) => {
	console.log(res);
});

// export default auth;
