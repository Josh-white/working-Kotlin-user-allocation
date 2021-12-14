import {render, screen} from "@testing-library/react";
import {TeamList} from "../../components/TeamList";

describe("TeamList", ()=> {
  it('should have a title', () => {
    render(<TeamList/>)

    expect(screen.getAllByRole('heading', {name: 'List of Teams'}))
  });
})