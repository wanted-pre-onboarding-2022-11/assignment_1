import { ITodo } from "@/types";
import { getAccessToken } from "@/utils/localStorage";
import axios, { AxiosRequestConfig } from "axios";

const { REACT_APP_API_END_POINT } = process.env;

interface RequestBody {
  email: string;
  password: string;
}

export const api = axios.create({
  // baseURL: process.env.REACT_APP_URL,
  baseURL: REACT_APP_API_END_POINT as string,
  timeout: 2000,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getAccessToken();
    const newConfig = { ...config };
    if (newConfig.headers && token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  },
  (error) => Promise.reject(error.response),
);

export const accountAPI = {
  postLogin: async (data: RequestBody): Promise<{ access_token: string }> => {
    const response = await api.post("auth/signin", data);
    return response.data;
  },
  postSignUp: async (data: RequestBody): Promise<{ access_token: string }> => {
    const response = await api.post("auth/signup", data);
    return response.data;
  },
};

export const todoAPI = {
  getTodos: async (): Promise<ITodo[]> => {
    const response = await api.get("todos");
    return response.data;
  },
  addTodo: async (todo: string): Promise<ITodo> => {
    const response = await api.post("todos", { todo });
    return response.data;
  },
  deleteTodo: async (id: number) => {
    const response = await api.delete(`todos/${id}`);
    return response;
  },
  updateTodo: async (
    id: number,
    { todo, isCompleted }: { todo: string; isCompleted: boolean },
  ): Promise<ITodo> => {
    const response = await api.put(`todos/${id}`, { todo, isCompleted });
    return response.data;
  },
};
