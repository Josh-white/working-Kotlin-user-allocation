package com.example.demo.people

import com.example.demo.team.Team
import com.fasterxml.jackson.databind.ObjectMapper
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers


@WebMvcTest(PeopleController::class)
internal class PeopleControllerTest {
    private lateinit var mockPeopleService: PeopleService

    @Autowired
    private lateinit var peopleController: PeopleController

    @Autowired
    lateinit var mockMvc: MockMvc

    @Autowired
    lateinit var objectMapper: ObjectMapper

    @Test
    fun `getPeople returns a list of people`() {
        mockPeopleService = mockk()
        peopleController = PeopleController(mockPeopleService)

        val listOfPeople = listOf(
            People(
                id = 1,
                firstName = "josh",
                lastName = "white",
                team = Team(id = 1, name = "Goat Team")
            ),
            People(
                id = 2,
                firstName = "easton",
                lastName = "white",
                team = Team(id = 1, name = "Goat Team")
            ),
            People(
                id = 3,
                firstName = "colton",
                lastName = "white",
                team = Team(id = 1, name = "Goat Team")
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
            lastName = "white",
            team = Team(id = 1, name = "Goat Team"))

        val newPerson = People(firstName = "josh", lastName = "white")

        every { mockPeopleService.createPerson(newPerson) } returns returnedPerson

        verify(exactly = 1) {mockPeopleService.createPerson(newPerson) }
    }

}