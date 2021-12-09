package com.example.demo

import io.mockk.every
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.mockito.Mockito.mock

internal class UserAllocationServiceTest {
    private lateinit var mockTeamRepository: TeamRepository
    @Test
    fun `saveTeam saves the team to the database` () {
        mockTeamRepository = mock()

        val team = Team(
            id = 1,
            name = "GOAT Team"
        )

        every { mockTeamRepository.save("GOAT Team") } returns team

    }
}