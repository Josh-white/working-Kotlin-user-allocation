package com.example.demo.people

import com.example.demo.team.Team
import com.example.demo.team.TeamRepository
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import java.util.*

internal class PeopleServiceTest {
    private lateinit var mockPeopleRepository: PeopleRepository
    private lateinit var mockTeamRepository: TeamRepository
    private lateinit var peopleService: PeopleService

    @BeforeEach
    fun setUp() {
        mockPeopleRepository = mockk()
        mockTeamRepository = mockk()
        peopleService = PeopleService(mockPeopleRepository, mockTeamRepository)
    }

    @Test
    fun `getPeople returns all the people from the repository`() {

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

        every { mockPeopleRepository.findAll() } returns listOfPeople

        assertThat(peopleService.getPeople()).isEqualTo(listOfPeople)
        verify(exactly = 1) { mockPeopleRepository.findAll() }
    }

    @Test
    fun `createPerson saves a new person into the repo`() {

        val newPerson = People(firstName = "josh", lastName = "white")
        //TODO dont really like this but is what it is for now.
        every { mockPeopleRepository.save(any()) } returns newPerson

        assertThat(peopleService.createPerson(People(firstName = "josh", lastName = "white"))).isEqualTo(newPerson)
    }

    @Test
    fun `switchTeams `() {

        val personToChangeTeams = People(
            id = 1,
            firstName = "josh",
            lastName = "white",
            team = Team(id = 1, name = "Goat Team")
        )

        every { mockPeopleRepository.findById(1) } returns Optional.of(personToChangeTeams)

    }
}