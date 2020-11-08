import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  credential: "include",
  withCredentials: true,
});

export const setToken = (token) =>
  (api.defaults.headers.common["x-access-token"] = token);

export const getMessages = () => api.get("messenger");

export const requestSignUp = (data) => api.post("/auth/signUp", { data });

export const requestLogin = (email, password) =>
  api.post("/auth/login", { email, password });

export const requestTokenRefresh = () => api.post("/auth/refreshToken");

export const getConversations = (page) => api.get(`messenger/?p=${page}`);

export const getConversationById = (conversationId) =>
  api.post(`messenger/id`, {
    id: conversationId,
  });

export const searchUsers = (q) => api.get(`/user/search?q=${q}`);

export const getConversationByMemberId = (memberId) =>
  api.get(`messenger/${memberId}`);

export const seenConversation = (conversationId, seen) => {
  api.post("messenger/conversation", {
    id: conversationId,
    seen: seen,
  });
};
