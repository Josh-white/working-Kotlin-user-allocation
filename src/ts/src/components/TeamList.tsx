import React from "react";

export interface TeamListProps {
  teamList: string[] | undefined
}
export const TeamList = ({teamList}: TeamListProps) => {
  const listOfTeams:React.ReactElement[] = []

  if (teamList === undefined) {
    return (<></>)
  }

  //TODO change this key to use id once database is up and running
  teamList.map((team, index) => {
    listOfTeams.push(<li key={index}>{team}</li>)
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