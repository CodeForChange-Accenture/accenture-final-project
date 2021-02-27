import React from "react";
import { render } from "@testing-library/react";
import Error from "../../pages/error";

jest.mock("react-router-dom", () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe("Home app", () => {
  it("Find components", () => {
    const { debug } = render(<Error />);
    debug();
  });
});
