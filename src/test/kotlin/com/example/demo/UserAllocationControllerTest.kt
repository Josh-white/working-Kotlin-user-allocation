package com.example.demo

import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Test

internal class UserAllocationControllerTest {
    private lateinit var mockUserAllocationService: UserAllocationService
    private lateinit var userAllocationController: UserAllocationController

    @Test
    fun `createTeam sends information to service`() {
        val team = Team(
            id = 1,
            name = "GOAT Team"
        )
        mockUserAllocationService = mockk()
        every { mockUserAllocationService.saveTeam("GOAT Team") } returns team

        userAllocationController.createTeam("GOAT Team")

        verify(exactly = 1) {mockUserAllocationService.saveTeam("GOAT Team")}
    }
}