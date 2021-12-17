import {Team} from "../hooks/useTeam";
import {useAllocation} from "../provider/AllocationContextProvider";
import {PeopleList} from "./PeopleList";

export const TeamCard = ({id, name}: Team) => {
  const {people} = useAllocation()

  if (people === undefined) {
    return (
      <div>
        <h3>{name}</h3>
      </div>
    )
  }

  const peopleInTeam = people.filter(person => {
    return (person.team?.id === id)
  })

  return (
    <>
      {peopleInTeam.map(person => (
        <PeopleList firstName={person.firstName} lastName={person.lastName} key={person.id}/>
      ))}
    </>

)


}

