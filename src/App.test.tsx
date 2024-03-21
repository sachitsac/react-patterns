import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    const underTest = render(<App />);
    expect(underTest).toMatchSnapshot();
  });
});
