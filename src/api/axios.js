import axios from "axios";
// import { API_BASE_URL } from "../constants";

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});
