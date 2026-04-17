import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const handleResponse = (res) => res.data;

export const handleError = (error) => {
  const message = error?.response?.data?.message || "Something went wrong";

  throw new Error(message);
};

export default api;
