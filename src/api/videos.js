import { URL } from '../constant';
import axios from 'axios';

class Videos {
    constructor() {
        this.instance = axios.create({
            baseURL: URL,
            timeout: 1000,
        });
    }

    createHeader() {
        return { Authorization: `Bearer ${localStorage.getItem('token')}` };
    }

    // upload videos

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

    async afterUpload({ status, key }) {
        try {
            const req = await this.instance({
                method: 'post',
                url: '/api/videos/after-upload',
                headers: this.createHeader(),
                params: {
                    statusOfVideo: status,
                    key: key,
                },
            });

            return req.data;
        } catch (error) {
            throw error;
        }
    }

    async uploadInAws({ file, url, onProgress }) {
        // If not work than try using fetch api
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

    async upload({ title, description, contenType, file, onProgress }) {
        const resDb = await this.uploadInDb({ title, description, contenType });
        const resAws = await this.uploadInAws({
            file,
            url: resDb['url'],
            onProgress: onProgress,
        });
        const resAfterDb = await this.afterUpload({
            status: true,
            key: resDb['key'],
        });
        resDb['uploaded'] = true;
        return resDb;
    }

    //Featch video

    async get(key) {
        try {
            const req = await this.instance({
                method: 'post',
                url: `/api/videos/get-video-url/${key}`,
                headers: this.createHeader(),
            });

            return req.data;
        } catch (error) {
            throw error;
        }
    }
}

const video = new Videos();

export default video;