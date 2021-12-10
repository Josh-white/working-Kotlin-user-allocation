package com.example.demo

import org.springframework.stereotype.Service

@Service
class UserAllocationService(var teamRepository: TeamRepository) {
    fun saveTeam(teamName: String): Team {
        val team = Team(
            name = teamName
        )
        return teamRepository.save(team)
    }

    fun getTeams(): List<Team> {
        return teamRepository.findAll()
    }

}
