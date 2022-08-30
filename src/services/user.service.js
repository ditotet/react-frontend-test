import { API } from "../axios";

export const getAllUsers = () => API.get("api/test/user");

