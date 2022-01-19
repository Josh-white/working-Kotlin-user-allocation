import React, {useState} from "react";
import "./TeamList.css"
import {useAllocation} from "../provider/AllocationContextProvider";
import {TeamCard} from "./TeamCard";
import {StartEndDateModal} from "./StartEndDateModal";

export const TeamList = () => {
    const {teams} = useAllocation()
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(prevState => !prevState)
    }

    if (teams === undefined) {
        return (<></>)
    }

    if (showModal) {
        return (
            <StartEndDateModal/>
        )
    }

    return (
        <div className='team-card-container'>
            {teams.map(team => (
                <TeamCard key={team.id} handleShowModal={handleShowModal} team={team}/>
            ))}
        </div>
    )
}