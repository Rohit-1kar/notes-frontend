import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL || "http://localhost:8080", // Spring Boot backend
});

export default api;
