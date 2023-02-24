import axios from "axios";

const url = "https://elearning0706.cybersoft.edu.vn/api";

class Http {
  constructor() {
    this.https = axios.create({
      baseURL: url,
      timeout: 100000,
    });
  }
}

export const http = new Http().https;
