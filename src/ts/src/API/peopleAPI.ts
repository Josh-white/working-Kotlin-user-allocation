import axios from "axios";
import {Person} from "../hooks/usePeople";

export const getPeople = async () => {
  return (await axios.get('/getPeople')).data
}

export const createPerson = async ({firstName, lastName}: Person) => {
  await axios.post('/createPerson', {
    firstName: firstName, lastName: lastName, team: {id: 1, name: "Unallocated"}
  })
}