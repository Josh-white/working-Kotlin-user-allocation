export interface TeamListProps {
  teamList: string[] | undefined
}
export const TeamList = ({teamList}: TeamListProps) => {
  const listOfTeams:string[] = []

  if (teamList === undefined) {
    return (<></>)
  }

  teamList.map(team => {
    listOfTeams.push(team)
  })

  return (
    <>
      <h2>List of Teams</h2>
      {listOfTeams}
    </>
  )
}