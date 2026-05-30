import axios, { type AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
});

interface ApiError {
  message: string;
}

export function errorMessage(err: unknown): string {
  const error = err as AxiosError<ApiError>;
  return error?.response?.data?.message ?? 'Something was wrong';
}

export interface RegisterPayload {
  username: string;
  password: string;
  telephone: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  username: string;
  userId: string;
}

export async function registerUser(data: RegisterPayload): Promise<{ message: string }> {
  try {
    const response = await api.post<{ message: string }>('/auth/register', data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(errorMessage(err), { cause: err });
  }
}

export async function loginUser(data: LoginPayload): Promise<AuthResponse> {
  try {
    const response = await api.post<AuthResponse>('/auth/login', data);
    const { token, username, userId } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(errorMessage(err), { cause: err });
  }
}

export function logoutUser(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('userId');
}

export const getToken = () => localStorage.getItem('token');
export const getUsername = () => localStorage.getItem('username');
export const getUserId = () => localStorage.getItem('userId');
export const isAuthenticated = () => !!localStorage.getItem('token');

