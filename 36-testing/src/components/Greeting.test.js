import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// this is one test suite
describe("Greeting component", () => {
  test("Is there hello world text in the app?", () => {
    // Arrange
    render(<Greeting />);
    // Act
    // ...nothing

    // Assert
    const helloElement = screen.getByText("Hello", {
      exact: false,
    });

    expect(helloElement).toBeInTheDocument();
  });

  test("if the correct <p> is there or nah..", () => {
    render(<Greeting />);

    const isThere = screen.getByText("Hi i am suraj", {
      exact: false,
    });

    expect(isThere).toBeInTheDocument();
  });

  test("render changed if the button was clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const isThere = screen.getByText("Changed", {
      exact: false,
    });

    expect(isThere).toBeInTheDocument();
  });

  test("is it there?", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const isThere = screen.queryByText("Hi i am suraj", {
      exact: false,
    });

    expect(isThere).toBeNull();
  });
});
