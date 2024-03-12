import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.deepseek.com/v1",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
