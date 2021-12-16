import {act, renderHook} from "@testing-library/react-hooks";
import {useTeam} from "../../hooks/useTeam";
import {createTeam, getTeams} from "../../API/teamAPI";

jest.mock("../../API/teamAPI");
const mockGetTeams = getTeams as jest.MockedFunction<typeof getTeams>;
const mockCreateTeam = createTeam as jest.MockedFunction<typeof createTeam>;

describe("useTeam", () => {
  it('should contain a empty array of teams', async () => {
    const listOfTeams = [
      {"id": 1, "name": "Some random Team"},
      {"id": 2, "name": "Another Team"},
      {"id": 3, "name": "Small Team"},
    ]
    mockGetTeams.mockResolvedValue(listOfTeams)

    const {result, waitForNextUpdate} = renderHook(() => useTeam())

    await waitForNextUpdate

    expect(result.current.teams).toHaveLength(3)
  });

  it('should add team to teams ', async () => {
    const listOfTeams = [
      {"id": 1, "name": "Some random Team"},
      {"id": 2, "name": "Another Team"},
      {"id": 3, "name": "Small Team"},
    ]
    mockGetTeams.mockResolvedValue(listOfTeams)
    const {result, waitForNextUpdate} = renderHook(() => useTeam())
    await  waitForNextUpdate

    expect(result.current.teams).toHaveLength(3)


    mockGetTeams.mockResolvedValue([...listOfTeams, {"id": 4, "name": "Team 1"}])
    act(() => {
      result.current.addTeam("Team 1")

    })
    await  waitForNextUpdate
    expect(mockCreateTeam).toBeCalledWith("Team 1")
    expect(result.current.teams).toHaveLength(4)

  });
})