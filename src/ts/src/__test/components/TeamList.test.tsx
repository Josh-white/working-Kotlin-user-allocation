import {render, screen} from "@testing-library/react";
import {TeamList} from "../../components/TeamList";
import {CreateTeam} from "../../components/CreateTeam";
import {Team} from "../../hooks/useTeam";

describe("TeamList", ()=> {
  it('should render page with teams', () => {
    renderTeamListWithTeams()

    expect(screen.getAllByRole('heading', {name: 'List of CreateTeam'}))
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  });

  const renderTeamListWithTeams = () => {
    const listOfTeams:Team[] = [
      {id: 1, name: "some team"},
      {id: 2, name: "another team"},
      {id: 3, name: "final team"}]

    render(
      <TeamList/>
    )
  }
})

