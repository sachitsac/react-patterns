import { render, screen } from "@testing-library/react";
import { Loadable } from "./Loadable";
import { ReactElement } from "react";

describe("Loadable", () => {
  const renderEmpty: ReactElement = <div>No data available</div>;

  it("should render loading state when isLoading is true", () => {
    render(
      <Loadable isLoading={true} isEmpty={false} renderEmpty={renderEmpty}>
        <div>Content</div>
      </Loadable>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render empty state when isEmpty is true", () => {
    render(
      <Loadable isLoading={false} isEmpty={true} renderEmpty={renderEmpty}>
        <div>Content</div>
      </Loadable>
    );

    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("should render children when isLoading and isEmpty are false", () => {
    render(
      <Loadable isLoading={false} isEmpty={false} renderEmpty={renderEmpty}>
        <div>Content</div>
      </Loadable>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
