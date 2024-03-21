import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import * as useUser from "../hooks/useUser";
import { User } from "../types/User";

const users: User[] = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
];

const useUserSpy = vi.spyOn(useUser, "useUser");

const setup = () => {
  render(<Users />);
};

describe("Users", () => {
  beforeEach(() => {
    useUserSpy.mockReturnValue({ loading: false, users });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should render loading message when users are being fetched", () => {
    useUserSpy.mockReturnValue({ loading: true, users: undefined });
    const component = setup();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  it("should render empty message when users are not available", () => {
    useUserSpy.mockReturnValue({ loading: false, users: undefined });
    const component = setup();
    expect(screen.getByText("No users available")).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  it("should render list of users", () => {
    const component = setup();
    users.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
    });
    expect(component).toMatchSnapshot();
  });
});
