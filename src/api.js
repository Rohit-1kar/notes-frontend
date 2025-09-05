import axios from "axios";

const api = axios.create({
  baseURL: "notes-back-production-6673.up.railway.app", // Spring Boot backend
});

export default api;
