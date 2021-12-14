import nock from "nock";
import {createTeam, getTeams} from "../../API/teamAPI";
import {NockBody} from "../testHelpers";

describe('getTeams', () => {
  it('should return a list of teams from the backend.', async () => {
    const listOfTeams = [
      {"id": 1, "name": "Some random Team"},
      {"id": 2, "name": "Another Team"},
      {"id": 3, "name": "Small Team"},
    ]

    const expectedListOfTeams = [
      {"id": 1, "name": "Some random Team"},
      {"id": 2, "name": "Another Team"},
      {"id": 3, "name": "Small Team"},
    ]

    nock('http://localhost').get('/getTeams').reply(200, listOfTeams);

    const result = await getTeams();
    expect(result).toEqual(expectedListOfTeams);
  });
})

describe('createTeam', () =>{
  it('should saves a team', async () => {
    const scope = nock('http://localhost')
      .post('/createTeam', {name: "Goat Team"} as NockBody)
      .reply(200);

    await expect(createTeam("Goat Team")).resolves.not.toThrow();

    expect(scope.isDone()).toBeTruthy();
  });
})