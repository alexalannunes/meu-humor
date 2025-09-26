import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3333",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// TODO: improve interceptors for requests and responses

api.interceptors.request.use((config) => {
  // const token = getToken();
  // if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

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

    // const originalRequest = error.config;

    // if (error.response?.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const newToken = await refreshToken();

    //   if (newToken) {
    //     originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

    //     return api(originalRequest);
    //   }
    // }

    return Promise.reject(error);
  },
);

export { api };
