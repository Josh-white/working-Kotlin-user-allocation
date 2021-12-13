package com.example.demo

import com.example.demo.team.Team
import com.example.demo.team.TeamRepository
import com.example.demo.team.TeamService
import io.mockk.every
import io.mockk.mockk
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class TeamServiceTest {
    private lateinit var mockTeamRepository: TeamRepository
    private lateinit var teamService: TeamService
    @Test
    fun `saveTeam saves the team to the database` () {
        mockTeamRepository = mockk()
        teamService = TeamService(mockTeamRepository)
        val team = Team(
            teamId = 1,
            teamName = "GOAT Team"
        )

        every { mockTeamRepository.save(any()) } returns team

        assertThat(teamService.saveTeam(
            Team(
            teamId = 1,
            teamName = "GOAT Team"
        )
        )).isEqualTo(team)
    }

    @Test
    fun `getTeams returns a list of teams from the repository` () {
        mockTeamRepository = mockk()
        teamService = TeamService(mockTeamRepository)
        val teams = listOf(
            Team(
                teamId = 1,
                teamName = "GOAT Team"
            ),
            Team(
                teamId = 2,
                teamName = "Strykers"
            )
        )

        every { mockTeamRepository.findAll() } returns teams

        assertThat(teamService.getTeams()).isEqualTo(teams)
    }
}