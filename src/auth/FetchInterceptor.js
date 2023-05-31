import axios from "axios";
import { API_BASE_URL } from "configs/AppConfig";
import history from "../history";
import { AUTH_TOKEN } from "redux/constants/Auth";
import { notification } from "antd";

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

// Config
const ENTRY_ROUTE = "/auth/login-2";
export const TOKEN_PAYLOAD_KEY = "authorization";
const PUBLIC_REQUEST_KEY = "public-request";

// API Request interceptor
service.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem(AUTH_TOKEN);

    if (jwtToken) {
      config.headers[TOKEN_PAYLOAD_KEY] = "Bearer " + jwtToken;
    }

    if (!jwtToken && !config.headers[PUBLIC_REQUEST_KEY]) {
      // history.push(ENTRY_ROUTE);
      // window.location.reload();
    }

    return config;
  },
  (error) => {
    // Do something with request error here
    notification.error({
      message: "Error",
    });
    Promise.reject(error);
  }
);

// API respone interceptor
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let notificationParam;
    console.log(error?.response);
    notificationParam = {
      message:
        error?.response?.data?.error?.message ||
        error?.response?.data?.error ||
        "Something was wrong",
    };

    if (error?.response?.status != undefined) {
      // Remove token and redirect
      if (error.response.status === 400 || error.response.status === 403) {
        notificationParam.message = "Authentication Fail";
        notificationParam.description = "Please login again";
        //localStorage.removeItem(AUTH_TOKEN);
        // history.push(ENTRY_ROUTE);
        //window.location.reload();
      } else if (error.response.status === 404) {
        //notificationParam.message = "Not Found";
      } else if (error.response.status === 500) {
        notificationParam.message = "Internal Server Error";
      } else if (error.response.status === 508) {
        notificationParam.message = "Time Out";
      } else if (error.response.status === 422) {
        //notificationParam.message = "Entité non traitable";
      } else {
        notificationParam.message = "Something was wrong try later";
      }
    }

    //notification.error(notificationParam);

    return Promise.reject(error);
  }
);

export default service;
