import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL || "https://notes-back-production-6673.up.railway.app/notes", // Spring Boot backend
});

export default api;
