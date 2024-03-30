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
  // Break in small small
  async upload() {}

  async getAll() {}

  async get() {}

  async delete() {}
}
