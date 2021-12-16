import React from "react";
import {Team} from "../hooks/useTeam";
import "./TeamList.css"

interface TeamListProps {
  allTeams: Team[] | undefined
}

export const TeamList = (props: TeamListProps) => {
  const listOfTeams:React.ReactElement[] = []

  if (props.allTeams === undefined) {
    return (<></>)
  }

  props.allTeams.map((team) => {
    listOfTeams.push(<li key={team.id} className="team">{team.name}</li>)
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