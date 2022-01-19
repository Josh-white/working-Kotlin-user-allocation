import {PeopleList} from "../../components/PeopleList";
import {render, screen} from "@testing-library/react";

describe("PeopleList", () => {
  it('should render a person first and last name', () => {
    render(<PeopleList firstName={"Josh"} lastName={"White"}/>)

    expect(screen.getByText("Josh, White")).toBeVisible()
  });
})