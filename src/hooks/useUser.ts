import { useState, useEffect } from "react";
import { getUsers } from "../api/fetchUsers";
import type { User } from "../types/User";

export type UsersResponse = {
  loading: boolean;
  users: User[] | null;
};

export const useUser = () => {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
      setLoading(false);
    };
    fetchUsers();
  }, []);
  return {
    loading,
    users,
  };
};
