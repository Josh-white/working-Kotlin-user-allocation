import axios from "axios";
import {Person} from "../hooks/usePeople";

export const getPeople = async () => {
    return (await axios.get('/getPeople')).data
}

export const createPerson = async ({firstName, lastName}: Person) => {
    await axios.post('/createPerson', {
        firstName: firstName, lastName: lastName, team: {id: 1, name: "Unallocated"}
    })
}

export const addPersonToTeam = async (personId: number, teamId: number) => {
    await axios.post(`/addPersonToTeam/${personId}/${teamId}`)
}