import axios, { AxiosError, AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "/backend",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

type ErrorResponse = AxiosError & {
  response: AxiosResponse<{
    statusCode: number;
    message: string;
    error: string;
  }>;
};

api.interceptors.response.use(
  (response) => response.data,

  (error: ErrorResponse) => {
    if (error.response.status === 401) {
      window.location.href = `/users`;
    }
    return Promise.reject(
      error.response.data.message || error.message || "Forbidden access"
    );
  }
);
