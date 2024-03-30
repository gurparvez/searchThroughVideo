import axios from 'axios';
import fs from 'fs';

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDM5ODI2ZGY4M2Q0NDc0Y2Y5NWQyMSIsInVzZXJuYW1lIjoibmFyZXNoIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiZXhwIjoxNzExNzcwMDM4fQ.GnpeiieW9qeu1FbyEE_d7asxl7GppI6gjE2xbQSrjfY';

class Videos {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://127.0.0.1:8000',
            timeout: 1000,
        });
    }

    createHeader() {
        return { Authorization: `Bearer ${token}` };
    }

    async uploadInDb({ title, description, contenType }) {
        try {
            
            const req = await this.instance({
                method: 'post',
                url: '/api/videos/upload',
                data: { title, description, contenType },
                headers: this.createHeader(),
            });

            return req.data;
        } catch (error) {
            throw error;
        }
    }

    async afterUpload(status, fileUri) {
        try {
            const req = await this.instance({
                method: 'post',
                url: '/api/videos/after-upload',
                headers: this.createHeader(),
                data: { status, fileUri },
            });

            return req.data;
        } catch (error) {
            throw error;
        }
    }

    async uploadInAws({ file, url, onProgress }) {
        const myHeaders = new Headers();
        myHeaders.delete('Transfer-Encoding');
        try {
            const req = await axios.put(url, file, {
                onUploadProgress: onProgress,
                headers: myHeaders,
            });
            return req.status;
        } catch (error) {
            throw error;
        }
    }

    // async upload({ title, description, contenType, file }) {

    // }
}

const video = new Videos();

// video.uploadInDb({
// 	"title":"v11",
// 	"description":"v10",
// 	"contenType":"video/mp4"
// }).then((res)=>{
// 	console.log(res)
// })

video
    .uploadInAws({
        file: fs.createReadStream('./v1.mp4'),
        url: 'https://videotextalgo.s3.amazonaws.com/videos/ed21a484-4936-42ff-9b4b-daea7bc12e29/e77cf607-b731-4967-8d13-2a3eb3ff862e.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYRUTEZQODWATY5FQ%2F20240330%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240330T034836Z&X-Amz-Expires=5000&X-Amz-SignedHeaders=host&X-Amz-Signature=5f1a3d4021473a0b7ac4bc9beb614ab14ea23ce42b57d4370567988c9a05ff11',
        onProgress: (p) => console.log(p),
    })
    .then((res) => {
        console.log(res);
    })
    .catch((e) => console.log(e));

// export default auth;
