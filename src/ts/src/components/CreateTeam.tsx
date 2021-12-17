import React, {useState} from "react";
import {useAllocation} from "../provider/AllocationContextProvider";

export const CreateTeam = () => {
  const {addTeam} = useAllocation()
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
    </div>
  )
}