import {useEffect, useState} from "react";
import {createTeam, getTeams} from "../API/teamAPI";

export interface Team {
  id: number,
  name: string
}

export const useTeam = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [refreshTeams, setRefreshTeams] = useState([0])

  useEffect(() => {
    const fetchData = async () => {
      const results =  await getTeams()
      setTeams(results)

      console.log("useEffect Called")
    }
    fetchData()
  }, [refreshTeams])

  const addTeam = async (teamName: string)  => {
    await createTeam(teamName)
    setRefreshTeams(prevState => [...prevState, 1])
  }

  return {teams, addTeam}
}