import React from "react";
import "./TeamList.css"
import {useAllocation} from "../provider/AllocationContextProvider";
import {TeamCard} from "./TeamCard";

export const TeamList = () => {
  const {teams} = useAllocation()

  if (teams === undefined) {
    return (<></>)
  }

  return (
    <div className='team-card-container'>
      {teams.map(team => (
        <TeamCard id={team.id} name={team.name} key={team.id}/>
      ))}
    </div>
  )
}