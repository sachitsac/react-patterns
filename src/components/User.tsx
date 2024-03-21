import { ReactElement } from "react";
import type { User } from "../types/User";

/**
 * This component is used to display the user details
 * Notice there is only ui logic here and not any business logic
 * This is a presentational component
 *
 * @param props
 * @returns ReactElement
 */
export const UserComponent = (props: { user: User }): ReactElement => {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
    </div>
  );
};
