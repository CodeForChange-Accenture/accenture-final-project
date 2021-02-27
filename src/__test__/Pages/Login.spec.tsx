import React from "react";
import { render } from "@testing-library/react";
import Login from "../../pages/login";

jest.mock("react-router-dom", () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe("Home app", () => {
  it("Find components", () => {
    const { debug } = render(<Login />);
    debug();
  });
});
