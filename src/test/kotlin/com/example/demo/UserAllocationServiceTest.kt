package com.example.demo

import io.mockk.every
import io.mockk.mockk
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class UserAllocationServiceTest {
    private lateinit var mockTeamRepository: TeamRepository
    private lateinit var userAllocationService: UserAllocationService
    @Test
    fun `saveTeam saves the team to the database` () {
        mockTeamRepository = mockk()
        userAllocationService = UserAllocationService(mockTeamRepository)
        val team = Team(
            id = 1,
            name = "GOAT Team"
        )

        every { mockTeamRepository.save(any()) } returns team

        assertThat(userAllocationService.saveTeam("GOAT Team")).isEqualTo(team)
    }

    @Test
    fun `getTeams returns a list of teams from the repository` () {
        mockTeamRepository = mockk()
        userAllocationService = UserAllocationService(mockTeamRepository)
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

        assertThat(userAllocationService.getTeams()).isEqualTo(teams)
    }
}