import {useEffect, useState} from "react";
import {createTeam, getTeams} from "../API/teamAPI";

export interface Team {
  id: number,
  name: string
}

export const useTeam = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [refreshTeams, setRefreshTeams] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const results =  await getTeams()
      setTeams(results)
    }
    fetchData()
  }, [refreshTeams])

  const addTeam = async (teamName: String)  => {
    await createTeam(teamName)
    setRefreshTeams(+1)
  }

  return {teams, addTeam}
}