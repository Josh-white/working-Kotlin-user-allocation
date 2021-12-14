package com.example.demo.team

import com.example.demo.team.Team
import com.example.demo.team.TeamController
import com.example.demo.team.TeamService
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Test


internal class TeamControllerTest {
    private lateinit var mockTeamService: TeamService
    private lateinit var teamController: TeamController

    @Test
    fun `createTeam sends information to service`() {
        val team = Team(
            id = 1,
            name = "GOAT Team"
        )
        mockTeamService = mockk()
        teamController = TeamController(mockTeamService)

        val requestedTeam = Team(name = "GOAT Team")

        every { mockTeamService.saveTeam(requestedTeam) } returns team

        teamController.createTeam(requestedTeam)

        verify(exactly = 1) {mockTeamService.saveTeam(requestedTeam)}
    }

    @Test
    fun `getTeams returns a list of teams` () {
        mockTeamService = mockk()
        teamController = TeamController(mockTeamService)

        val listOfTeams = listOf(Team(id = 1, name = "Strykers"), Team(id = 2, name = "Cowboys"))

        every { mockTeamService.getTeams() } returns (listOfTeams)

        teamController.getTeams()

        verify(exactly = 1) { mockTeamService.getTeams() }
    }
}