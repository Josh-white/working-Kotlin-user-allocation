import nock from "nock";
import {NockBody} from "../testHelpers";
import {createPerson, getPeople} from "../../API/peopleAPI";

describe('getPeople', () => {
  it('should return a list of people from the backend.', async () => {
    const listOfPeople = [
      {"id": 1, "firstName": "Josh", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}},
      {"id": 2, "firstName": "Easton", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}},
      {"id": 3, "firstName": "Colton", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}},
    ]

    const expectedListOfPeople = [
      {"id": 1, "firstName": "Josh", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}},
      {"id": 2, "firstName": "Easton", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}},
      {"id": 3, "firstName": "Colton", "lastName": "White", "team": {"id": "1", "name": "Goat Team"}},
    ]

    nock('http://localhost').get('/getPeople').reply(200, listOfPeople);

    const result = await getPeople();
    expect(result).toEqual(expectedListOfPeople);
  });
})

describe('createPerson', () =>{
  it('should save a person', async () => {
    const scope = nock('http://localhost')
      .post('/createPerson', {firstName: "Josh", lastName: "White", team: {id:1, name: "Unallocated"}} as NockBody)
      .reply(200);

    await expect(createPerson({firstName:"Josh",lastName: "White"})).resolves.not.toThrow();

    expect(scope.isDone()).toBeTruthy();
  });
})