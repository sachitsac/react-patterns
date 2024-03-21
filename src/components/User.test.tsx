import { render, screen } from "@testing-library/react";
import { UserComponent } from "./User";
import { User } from "../types/User";

const user: User = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
};

const setup = (user: User) => {
  render(<UserComponent user={user} />);
};

describe("UserComponent", () => {
  it("should render user details", () => {
    const component = setup(user);
    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
