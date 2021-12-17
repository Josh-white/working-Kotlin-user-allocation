import {PeopleList} from "./PeopleList";
import {usePeople} from "../hooks/usePeople";
import React, {useState} from "react";

export const People = () => {
  const {people, addPerson} = usePeople()

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const handleAddPerson = async () => {
    await addPerson({firstName: firstName, lastName: lastName})
    setFirstName('')
    setLastName('')
  }

  const handleUserInputFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }

  const handleUserInputLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }

return (
  <div>
    <h3>Add a Person to your Organization</h3>
    <input aria-label="enter first name" placeholder="enter first name" onChange={handleUserInputFirstName}/>
    <input aria-label="enter last name" placeholder="enter last name" onChange={handleUserInputLastName}/>
    <button onClick={() => handleAddPerson()}>add person</button>
    <PeopleList allPeople={people}/>
  </div>
)
}