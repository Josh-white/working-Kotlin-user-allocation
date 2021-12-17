import {useEffect, useState} from "react";
import {createPerson, getPeople} from "../API/peopleAPI";
import {Team} from "./useTeam";

//TODO Not sure about ID as optional have to think about it more.
export interface Person {
  id?: number
  firstName: string,
  lastName: string,
  team?: Team
}


export const usePeople = () => {
  const [people, setPeople] = useState<Person[]>()
  const [refreshPeople, setRefreshPeople] = useState(0)

  useEffect(() => {
    getPeople().then(setPeople)

  }, [refreshPeople])

  const addPerson = ({firstName, lastName}: Person) => {
    createPerson({firstName: firstName, lastName: lastName})
      .then(() => setRefreshPeople(prevState => prevState + 1)
      )
  }
  return {people, addPerson}
}