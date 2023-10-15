import axios from "axios";
import { message } from "antd";
import { URLSERVE, getAccessTokenFormLC, setAccessTokenFormLC, setUserFormLC } from "../utils/utils";

class Http {
  constructor() {
    this.https = axios.create({
      baseURL: URLSERVE,
      timeout: 100000,
    });

    this.https.interceptors.request.use(
      function(config) {
        const data = JSON.parse(localStorage.getItem("user"));
        const token = getAccessTokenFormLC()
        config.headers = {
          ...config.headers,
          accept: "application/json",
          Authorization: `${
            localStorage.getItem("user") ? "Bearer " + token : ""
          }`,
        };
        return config;
      },
      function(error) {
        console.log("request",error)
        // Do something with request error
        return Promise.reject(error);
      }
    );

    this.https.interceptors.response.use(
      function(response) {
        const { url } = response.config;
        console.log(url)
        if (url === "/user/login") {
          message.success("Login ok");
          const data = response.data;
          console.log(data);
          const { token, user } = data;
          console.log(token, user);
          setAccessTokenFormLC(token);
          setUserFormLC(user);
         
        }
         if (url === "tour/newtour") {
          message.success("Tao tour Oke");
        }
        if(url.includes("deletetour")){
          message.success("Xoa Oke");

        }

        if(url.includes("updateTour")){
          message.success("Cap nhat Oke");
        }

        if (url.includes("datafooter/changefooter")){
          message.success("Cap nhat Oke");
        }

        if (url.includes("sliderheader/changesliderheader")) {
          message.success("Cap nhat Oke");
        }

        if (url.includes("aboutus/update-about-us-home")){
          message.success("Cap nhat Oke");
        }

        if (url.includes("aboutus/update-about-us-detail")) {
          message.success("Cap nhat Oke");
        }

        if (url.includes("tour/postRecommentTour")) {
          message.success("Cap nhat Oke");
        }

        return response;
      },
      function(error) {
        console.log("response",error)
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
