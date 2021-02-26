import ReactCurrentDispatcher, { render } from "@testing-library/react";
import React from "react";
import Dashboard from "../../pages/dashboard/index";
import * as redux from "react-redux";
import { AddAccountInfos } from "../../store/modules/user/action";
import { IBank } from "../../store/modules/user/types";

jest.mock("react-router-dom", () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock("react-redux", () => {
  return {
    useDispatch: jest.fn(),
  };
});

jest.mock("react-redux", () => {
  return {
    useSelector: jest.fn(),
  };
});

jest.mock("react", () => {
  return {
    React: jest.fn(),
    useState: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock("react", () => {
  return {
    React: jest.fn(),
    useEffect: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe("Home app", () => {
  it("Find components", () => {
    const { debug } = render(<Dashboard />);
    debug();
  });
});

describe("dispatch mock", function () {
  it("should mock dispatch", function () {
    //arrange
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    //action
    AddAccountInfos(() => Object:IBank);

    //assert
    expect(mockDispatchFn).toHaveBeenCalledWith(expectedAction);

    //teardown
    useDispatchSpy.mockClear();
  });
});
