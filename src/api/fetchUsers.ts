import type { User } from "../types/User";
import { appConfig } from "../config/appConfig";

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(appConfig.userApiUrl);
  const users = await response.json();
  return users;
};
