import axios from "axios";

const url = "https://elearning0706.cybersoft.edu.vn/api";

class Http {
  constructor() {
    this.https = axios.create({
      baseURL: url,
      timeout: 100000,
    });

    this.https.interceptors.request.use(
      function (config) {
        const data = JSON.parse(localStorage.getItem("user"));
        config.headers = {
          ...config.headers,
          accept: "application/json",
          Authorization: `${
            localStorage.getItem("user") ? "Bearer " + data.accessToken : ""
          }`,
        };
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    this.https.interceptors.response.use(
      function (response) {
        console.log(response);
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }
}

export const http = new Http().https;
