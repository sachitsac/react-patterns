import { ReactElement } from "react";
import type { User } from "../types/User";

export const UserComponent = (props: { user: User }): ReactElement => {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
    </div>
  );
};
