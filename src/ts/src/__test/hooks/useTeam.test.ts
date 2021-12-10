import {act, renderHook} from "@testing-library/react-hooks";
import {useTeam} from "../../hooks/useTeam";

describe("useTeam", () => {
  it('should contain a empty array of teams', () => {
    const {result} = renderHook(() => useTeam())

    expect(result.current.teams).toHaveLength(0)
  });

  it('should add team to teams ', () => {
    const {result} = renderHook(() => useTeam())

    expect(result.current.teams).toHaveLength(0)

    act (() => {
      result.current.addTeam("Team 1")
    })

    expect(result.current.teams).toHaveLength(1)

  });
})