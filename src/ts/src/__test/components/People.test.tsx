import {render, screen} from "@testing-library/react";
import {People} from "../../components/People";

describe("People", () => {
  it('should have an input for first and last names', () => {
    render(<People/>)

    expect(screen.getByLabelText("enter first name")).toBeVisible()
    expect(screen.getByLabelText("enter last name")).toBeVisible()
  });

  it('should have a button to create a new person', () => {
    render(<People/>)

    expect(screen.getByRole("button", {name: "add person"}))
  });
})