import { httpClient } from "./axios.js";

export function Filter(data) {
  return httpClient.post("/", data);
}
