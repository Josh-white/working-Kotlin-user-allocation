package com.example.demo.people

import com.example.demo.team.Team
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class PeopleControllerTest {
    private lateinit var mockPeopleService: PeopleService
    private lateinit var peopleController: PeopleController

    @Test
    fun `getPeople returns a list of people`() {
        mockPeopleService = mockk()
        peopleController = PeopleController(mockPeopleService)

        val listOfPeople = listOf(
            People(
                id = 1,
                firstName = "josh",
                lastname = "white",
                teamId = Team(id = 1, name = "Goat Team")
            ),
            People(
                id = 2,
                firstName = "easton",
                lastname = "white",
                teamId = Team(id = 1, name = "Goat Team")
            ),
            People(
                id = 3,
                firstName = "colton",
                lastname = "white",
                teamId = Team(id = 1, name = "Goat Team")
            )
        )

        every { mockPeopleService.getPeople() } returns (listOfPeople)

        peopleController.getPeople()

        verify(exactly = 1) { mockPeopleService.getPeople() }
    }

    @Test
    fun `createPerson creates a person and gives them a default team of Unallocated`() {
        mockPeopleService = mockk()
        peopleController = PeopleController(mockPeopleService)

        val returnedPerson = People(
            id = 1,
            firstName = "josh",
            lastname = "white",
            teamId = Team(id = 1, name = "Goat Team"))

        val newPerson = People(firstName = "josh", lastname = "white")

        every { mockPeopleService.createPerson(newPerson) } returns returnedPerson

        verify(exactly = 1) {mockPeopleService.createPerson(newPerson) }
    }
}