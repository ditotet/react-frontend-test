import { useEffect, useState } from "react";
import { getAllUsers } from "../services/user.service";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllUsers()
      .then((res) => setUsers(res.data))
      .catch((e) => setError(e.response.data));
  }, []);

  return {
    users,
    error,
  };
};
