import axios from "axios";
// import { API_BASE_URL } from "../constants";

export const httpClient = axios.create({
  baseURL: "http://localhost:3500/",
});
