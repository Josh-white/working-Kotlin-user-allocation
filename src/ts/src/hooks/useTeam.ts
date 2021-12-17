import {useEffect, useState} from "react";
import {createTeam, getTeams} from "../API/teamAPI";

export interface Team {
  id: number,
  name: string
}

export const useTeam = () => {
  const [teams, setTeams] = useState<Team[]>()
  const [refreshTeams, setRefreshTeams] = useState(0)

  useEffect(() => {
    getTeams().then(setTeams)

  }, [refreshTeams])

  const addTeam =  (teamName: string)  => {
    createTeam(teamName)
      .then(() => setRefreshTeams(prevState => prevState + 1))

  }

  return {teams, addTeam}
}