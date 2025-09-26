import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3333",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// TODO: improve interceptors for requests and responses

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // handle unauthorized errors, e.g., redirect to login
      // clear stores, etc.
      // window.location.href = '/login'; // Example action
    }

    return Promise.reject(error);
  },
);

export { api };
