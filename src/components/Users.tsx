import { ReactElement } from "react";
import { useUser } from "../hooks/useUser";
import { UserComponent } from "./User";
import { Loadable } from "./Loadable";

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

  return (
    <Loadable
      isLoading={loading}
      isEmpty={users?.length === 0}
      renderEmpty={<div>No users available</div>}
    >
      {users?.map((user) => (
        <UserComponent key={user.id} user={user} />
      ))}
    </Loadable>
  );
};
