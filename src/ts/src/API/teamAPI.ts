//Nock tests remember this for later

import axios from "axios";
import {Team} from "../hooks/useTeam";


export const createTeam = async (teamName: String) => {
  await axios.post('/createTeam', {
    name: teamName
  })
}

export const getTeams = async (): Promise<Team[]> => {
  return (await axios.get('/getTeams')).data
}