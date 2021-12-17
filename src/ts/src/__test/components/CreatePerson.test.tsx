import {render, screen} from "@testing-library/react";
import {CreatePerson} from "../../components/CreatePerson";

describe("People", () => {
  it('should have an input for first and last names', () => {
    render(<CreatePerson/>)

    expect(screen.getByLabelText("enter first name")).toBeVisible()
    expect(screen.getByLabelText("enter last name")).toBeVisible()
  });

  it('should have a button to create a new person', () => {
    render(<CreatePerson/>)

    expect(screen.getByRole("button", {name: "add person"}))
  });
})