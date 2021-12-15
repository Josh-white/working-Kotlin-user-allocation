package com.example.demo.people

import com.example.demo.team.Team
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

internal class PeopleServiceTest {
    private lateinit var mockPeopleRepository: PeopleRepository
    private lateinit var peopleService: PeopleService

    @Test
    fun `getPeople returns all the people from the repository`() {
        mockPeopleRepository = mockk()
        peopleService = PeopleService(mockPeopleRepository)

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

        every { mockPeopleRepository.findAll() } returns listOfPeople

        assertThat(peopleService.getPeople()).isEqualTo(listOfPeople)
        verify(exactly = 1) { mockPeopleRepository.findAll() }
    }

    @Test
    fun `createPerson saves a new person into the repo`() {
        mockPeopleRepository = mockk()
        peopleService = PeopleService(mockPeopleRepository)

        val newPerson = People(firstName = "josh", lastname = "white")
        //TODO dont really like this but is what it is for now.
        every { mockPeopleRepository.save(any()) } returns newPerson

        assertThat(peopleService.createPerson(People(firstName = "josh", lastname = "white"))).isEqualTo(newPerson)
    }
}