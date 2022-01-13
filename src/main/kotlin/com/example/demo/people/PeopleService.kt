package com.example.demo.people

import com.example.demo.team.Team
import com.example.demo.team.TeamRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class PeopleService(var peopleRepository: PeopleRepository, var teamRepository: TeamRepository) {
    fun getPeople(): List<People> {
        return peopleRepository.findAll()
    }

    fun createPerson(newPerson: People): People {
        return peopleRepository.save(newPerson)
    }

    fun switchTeams(personId: Long, teamId: Long): People {
        val personToChange = peopleRepository.findById(personId)
            .orElseThrow()

        val newTeam: Team = teamRepository.findById(teamId)
            .orElseThrow()

        personToChange.team = newTeam

        return peopleRepository.save(personToChange)

    }

}
