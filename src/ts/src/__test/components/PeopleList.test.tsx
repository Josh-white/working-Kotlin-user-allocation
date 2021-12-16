import {render, screen} from "@testing-library/react";
import {PeopleList} from "../../components/PeopleList";
import {Person} from "../../hooks/usePeople";

describe("PeopleList", () => {
  it('should have a title', () => {
    renderPeopleListWithPeople()

    expect(screen.getAllByRole('heading', {name: 'List of People'}))
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  });

  const renderPeopleListWithPeople = () => {
    const listOfPeople: Person[] = [
      {id: 1, first: "josh", last: "white", team: {id: 1, name: "Goat Team"}},
      {id: 2, first: "colton", last: "white", team: {id: 1, name: "Goat Team"}},
      {id: 3, first: "easton", last: "white", team: {id: 1, name: "Goat Team"}}
    ]

    render(<PeopleList allPeople={listOfPeople}/>)
  }
})