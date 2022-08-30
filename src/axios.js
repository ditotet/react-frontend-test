import axios from "axios";

const BASE_URL = "http://o.feldbau.dev-remote.shupperz.com:3000/"

export const API = axios.create({
  baseURL: BASE_URL
});

