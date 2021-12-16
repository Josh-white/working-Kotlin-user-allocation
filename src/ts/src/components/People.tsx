import {PeopleList} from "./PeopleList";
import {usePeople} from "../hooks/usePeople";
import React, {useState} from "react";
import {useTeam} from "../hooks/useTeam";

export const People = () => {
  const {people, addPerson} = usePeople()
  const {teams} = useTeam()

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const handleAddPerson = async () => {
    await addPerson({first: firstName, last: lastName})
  }

  const handleUserInputFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }

  const handleUserInputLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }

return (
  <>
    <input aria-label="enter first name" placeholder="enter first name" onChange={handleUserInputFirstName}/>
    <input aria-label="enter last name" placeholder="enter last name" onChange={handleUserInputLastName}/>
    <button onClick={() => handleAddPerson()}>add person</button>
    <PeopleList allPeople={people}/>
  </>
)
}