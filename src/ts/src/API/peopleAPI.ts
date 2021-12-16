import axios from "axios";
import {Person} from "../hooks/usePeople";

export const getPeople = async () => {
  return (await axios.get('/getPeople')).data
}

export const createPerson = async ({first, last}: Person) => {
  await axios.post('/createPerson', {
    firstName: first, lastName: last, team: {id: 1, name: "Unallocated"}
  })
}