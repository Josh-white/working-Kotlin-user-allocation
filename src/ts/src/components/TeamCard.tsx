import {Team} from "../hooks/useTeam";
import {useAllocation} from "../provider/AllocationContextProvider";
import {PeopleList} from "./PeopleList";
import './TeamCard.css'
import React from "react";

export const TeamCard = ({id, name}: Team) => {
    const {people} = useAllocation()

    if (people === undefined) {
        return <></>
    }

    const peopleInTeam = people.filter(person => {
        return (person.team?.id === id)
    })

    if (peopleInTeam.length === 0) {
        return (
            <div className='team-card'>
                <h3>{name}</h3>
                <span>This team has no members</span>
            </div>
        )
    }

    function handleOnDrop(event: React.DragEvent<HTMLDivElement>) {
        // event.preventDefault()

        alert("I handled the drop of a team member")
    }

    function preventDefault(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
    }

    return (
        <div className='team-card'
             onDrop={(event) => handleOnDrop(event)}
             onDragOver={(event) => preventDefault(event)}
             onDragEnter={(event) => preventDefault(event)}
             onDragLeave={(event) => preventDefault(event)}>
            <h3>{name}</h3>
            {peopleInTeam.map(person => (
                <PeopleList firstName={person.firstName} lastName={person.lastName} key={person.id}/>
            ))}
        </div>

    )


}

