import {useEffect, useState} from "react";
import {createPerson, getPeople} from "../API/peopleAPI";
import {Team} from "./useTeam";

//TODO Not sure about ID as optional have to think about it more.
export interface Person {
  id?: number
  first: string,
  last: string,
  team?: Team
}


export const usePeople = () => {
  const [people, setPeople] = useState<Person[]>()
  const [refreshPeople, setRefreshPeople] = useState(0)

  useEffect(() => {
    getPeople().then(setPeople)

  }, [refreshPeople])

  const addPerson =  ({first, last}: Person)  => {
    const savedPerson = createPerson({first, last})
    setRefreshPeople(prevState => prevState + 1)
  }
  return {people, addPerson}
}