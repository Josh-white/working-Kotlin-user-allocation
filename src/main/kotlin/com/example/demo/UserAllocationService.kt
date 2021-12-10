package com.example.demo

import org.springframework.stereotype.Service

@Service
class UserAllocationService(var teamRepository: TeamRepository) {
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
