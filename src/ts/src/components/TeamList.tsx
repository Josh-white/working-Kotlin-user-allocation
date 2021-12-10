import React, {useEffect} from "react";
import {useTeam} from "../hooks/useTeam";

export const TeamList = () => {
  const {teams} = useTeam()
  const listOfTeams:React.ReactElement[] = []

  useEffect(() => {

  }, [teams])

  if (teams === undefined) {
    return (<></>)

  }

  teams.map((team) => {
    listOfTeams.push(<li key={team.id}>{team.name}</li>)
  })

  return (
    <>
      <h2>List of Teams</h2>
      <ul>
        {listOfTeams}
      </ul>
    </>
  )
}