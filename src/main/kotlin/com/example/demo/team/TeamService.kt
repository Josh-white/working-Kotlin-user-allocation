package com.example.demo.team

import org.springframework.stereotype.Service

@Service
class TeamService(var teamRepository: TeamRepository) {
    fun saveTeam(team: Team): Team {
        return teamRepository.save(team)
    }

    fun getTeams(): List<Team> {
        return teamRepository.findAll()
    }

}
