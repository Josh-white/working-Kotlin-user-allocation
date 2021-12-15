package com.example.demo.team

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
        val teamToSave = Team(
            id= 1,
            name = "GOAT Team"
        )

        every { mockTeamRepository.save(any()) } returns teamToSave

        assertThat(teamService.saveTeam(
            Team(
            name = "GOAT Team"
        )
        )).isEqualTo(teamToSave)
    }

    @Test
    fun `getTeams returns a list of teams from the repository` () {
        mockTeamRepository = mockk()
        teamService = TeamService(mockTeamRepository)
        val teams = listOf(
            Team(
                id = 1,
                name = "GOAT Team"
            ),
            Team(
                id = 2,
                name = "Strykers"
            )
        )

        every { mockTeamRepository.findAll() } returns teams

        assertThat(teamService.getTeams()).isEqualTo(teams)
    }
}