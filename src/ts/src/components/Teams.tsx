import React, {useState} from "react";
import {TeamList} from "./TeamList";
import {useTeam} from "../hooks/useTeam";


export const Teams = () => {

  const {addTeam, teams} = useTeam()

  const [teamName, setTeamName] = useState<string>('')

  const handleAddTeam = async () => {
    await addTeam(teamName)
  }

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value)
  }

  return (
    <>
      <input aria-label={'enter team name'} placeholder={'enter team name'} onChange={handleUserInput}/>
      <button onClick={() => handleAddTeam()}>
        add team
      </button>
      <TeamList allTeams={teams}/>
    </>

  )
}