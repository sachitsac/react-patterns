import { renderHook } from "@testing-library/react-hooks";
import { useUser } from "./useUser";
import { User } from "../types/User";
import * as getUsers from "../api/fetchUsers";

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

const fetchUserSpy = vi.spyOn(getUsers, "getUsers");

describe("useUser", () => {
  beforeEach(() => {
    fetchUserSpy.mockResolvedValue(users);
  });

  afterAll(() => {
    fetchUserSpy.mockRestore();
  });

  it("should fetch users and set loading to false", async () => {
    fetchUserSpy.mockResolvedValue([]);
    const { result, waitForNextUpdate } = renderHook(() => useUser());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.users).toEqual([]);
  });

  it("useUser fetches users and updates loading state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUser());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.users).toEqual(users);
  });
});
