import axios from "axios";
import { message } from "antd";
import { setAccessTokenFormLC, setUserFormLC } from "../utils/utils";
const url = "https://elearning0706.cybersoft.edu.vn/api";
const urlDulich = "http://localhost:4000/";

class Http {
  constructor() {
    this.https = axios.create({
      baseURL: urlDulich,
      timeout: 100000,
    });

    this.https.interceptors.request.use(
      function(config) {
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
      function(error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    this.https.interceptors.response.use(
      function(response) {
        const { url } = response.config;
        console.log(response.config);
        if (url === "/user/login") {
          message.success("Login ok");
          const data = response.data;
          console.log(data);
          const { token, user } = data;
          console.log(token, user);
          setAccessTokenFormLC(token);
          setUserFormLC(user);
          setTimeout(() => {
            document.location.assign("/");
          }, 2000);
        }
        return response;
      },
      function(error) {
        if (error.config.url === "/user/login") {
          message.error("error");
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }
}

export const http = new Http().https;
