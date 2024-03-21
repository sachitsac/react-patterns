import { ReactElement } from "react";
import { useUser } from "../hooks/useUser";
import { UserComponent } from "./User";

export const Users = (): ReactElement => {
  const users = useUser();
  if (!users) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {users.map((user) => (
        <UserComponent key={user.id} user={user} />
      ))}
    </div>
  );
};
