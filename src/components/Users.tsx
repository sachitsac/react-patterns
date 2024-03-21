import { ReactElement } from "react";
import { useUser } from "../hooks/useUser";
import { UserComponent } from "./User";

/**
 * This component is used to display the list of users
 * Notice there is only ui logic here and not any business logic
 * We are using a useUser hook to get the list of users from the server
 * This is a presentational component
 *
 * @returns
 */
export const Users = (): ReactElement => {
  const { loading, users } = useUser();

  if (loading && users == null) {
    return <div>Loading...</div>;
  }

  if (!loading && users == null) {
    return <div>No users available</div>;
  }

  return (
    <div>
      {users?.map((user) => (
        <UserComponent key={user.id} user={user} />
      ))}
    </div>
  );
};
