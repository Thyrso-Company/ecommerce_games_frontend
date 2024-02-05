import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: 'http://ecommerce_games_backend.test:8080',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;