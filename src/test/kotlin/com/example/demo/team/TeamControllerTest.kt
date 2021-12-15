package com.example.demo.team

import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Test


internal class TeamControllerTest {
    private lateinit var mockTeamService: TeamService
    private lateinit var teamController: TeamController

    @Test
    fun `createTeam sends information to service`() {
        mockTeamService = mockk()
        teamController = TeamController(mockTeamService)

        val returnedTeam = Team(
            id = 1,
            name = "GOAT Team"
        )
        val requestedTeam = Team(name = "GOAT Team")

        every { mockTeamService.saveTeam(requestedTeam) } returns returnedTeam

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