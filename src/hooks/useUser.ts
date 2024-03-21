import { useState, useEffect } from "react";
import { getUsers } from "../api/fetchUsers";
import type { User } from "../types/User";

export const useUser = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    getUsers().then((users: User[]) => setUsers(users));
  }, []);
  return users;
};
