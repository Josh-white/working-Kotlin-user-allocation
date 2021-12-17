import {act, renderHook} from "@testing-library/react-hooks";
import {usePeople} from "../../hooks/usePeople";
import {createPerson, getPeople} from "../../API/peopleAPI";

jest.mock("../../API/peopleAPI");
const mockGetPeople = getPeople as jest.MockedFunction<typeof getPeople>;
const mockCreatePerson = createPerson as jest.MockedFunction<typeof createPerson>;

describe("usePeople", () => {
  it('should contain an array of people', async () => {

    const expectedListOfPeople = [
      {"id": 1, "firstName": "Josh", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}},
      {"id": 2, "firstName": "Easton", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}},
      {"id": 3, "firstName": "Colton", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}},
    ]
    mockGetPeople.mockResolvedValue(expectedListOfPeople)
    const {result, waitForNextUpdate} = renderHook(() => usePeople())

    await waitForNextUpdate

    expect(result.current.people).toHaveLength(3)

  });

  it('should add person to people ', async () => {
    mockGetPeople.mockResolvedValue([
      {"id": 1, "firstName": "Josh", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}}])

    const {result, waitForNextUpdate} = renderHook(() => usePeople())


    act(() => {
      result.current.addPerson({firstName: "josh", lastName: "white"})
    })

    await waitForNextUpdate

    expect(mockCreatePerson).toBeCalledWith({first: "josh", last: "white", team: {id: 1, name: "Unallocated"}})
    expect(result.current.people).toHaveLength(1)

  });
})