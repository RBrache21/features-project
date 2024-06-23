import axios from "axios";

// Without Backend
// const API_URL = "https://api.wikimedia.org/feed/v1/wikipedia/";

// With Backend
const API_URL = process.env.REACT_APP_API_URL;

export const wikipediaAPI = axios.create({
  baseURL: API_URL,
});
