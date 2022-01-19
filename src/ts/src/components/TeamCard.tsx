import {Team} from "../hooks/useTeam";
import {useAllocation} from "../provider/AllocationContextProvider";
import {PeopleList} from "./PeopleList";
import './TeamCard.css'
import React from "react";

interface TeamCardProps {
    team: Team
    handleShowModal: ()=> void
}

export const TeamCard = ({team, handleShowModal}: TeamCardProps) => {
    const {people, addToTeam} = useAllocation()

    if (people === undefined) {
        return <></>
    }

    const peopleInTeam = people.filter(person => {
        return (person.team?.id === team.id)
    })

    if (peopleInTeam.length === 0) {
        return (
            <div className='team-card'
                 onDrop={(event) => handleOnDrop(event)}
                 onDragOver={(event) => preventDefault(event)}
                 onDragEnter={(event) => preventDefault(event)}
                 onDragLeave={(event) => preventDefault(event)}>
                <h3>{team.name}</h3>
                <span>This team has no members</span>
            </div>
        )
    }

    function handleOnDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
        const dataFromPerson = JSON.parse(event.dataTransfer.getData("personData"))
        addToTeam(dataFromPerson.personId, team.id)
        handleShowModal()
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
            <h3>{team.name}</h3>
            {peopleInTeam.map(person => (
                <PeopleList firstName={person.firstName} lastName={person.lastName} key={person.id} id={person.id}/>
            ))}
        </div>
    )
}

