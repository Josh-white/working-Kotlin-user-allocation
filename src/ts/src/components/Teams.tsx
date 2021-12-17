import React, {useState} from "react";
import {TeamList} from "./TeamList";
import {useTeam} from "../hooks/useTeam";


export const Teams = () => {

  const {addTeam, teams} = useTeam()
  const [teamName, setTeamName] = useState<string>('')

  const handleAddTeam = async () => {
    await addTeam(teamName)
    setTeamName('')
  }

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value)
  }

  return (
    <div>
      <h3>Add a Team to your Organization</h3>
      <input aria-label={'enter team name'} placeholder={'enter team name'} onChange={handleUserInput}/>
      <button onClick={() => handleAddTeam()}>
        add team
      </button>
      <TeamList allTeams={teams}/>
    </div>

  )
}