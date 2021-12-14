package com.example.demo.team

import org.springframework.stereotype.Service

@Service
class TeamService(var teamRepository: TeamRepository) {
    fun saveTeam(team: Team): Team {
        val newTeam = Team(
            name = team.name
        )
        return teamRepository.save(newTeam)
    }

    fun getTeams(): List<Team> {
        return teamRepository.findAll()
    }

}
