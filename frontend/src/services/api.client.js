import axios from "axios";
import { logError } from "../../../backend/src/utils/logger";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const handleResponse = (res) => {
  return {
    data: Array.isArray(res?.data?.data) ? res.data.data : [],
    meta: res?.data?.meta || {},
    message: res?.data?.message || "",
  };
};

export const handleError = (error) => {
  const message = error?.response?.data?.message || "Something went wrong";
  logError("API Error:", message);
  return { data: [] };
};

export default api;
