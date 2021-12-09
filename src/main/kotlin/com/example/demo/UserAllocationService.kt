package com.example.demo

import org.springframework.stereotype.Service

@Service
class UserAllocationService {
    fun saveTeam(teamName: String): Team {
        val team = Team(
            name = teamName
        )
        TeamRepository.save(team)
    }

}
