package com.example.demo.people

import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
class PeopleController(var peopleService: PeopleService) {
    @GetMapping("/getPeople")
    fun getPeople(): List<People> {
        return peopleService.getPeople()
    }

    @PostMapping("/createPerson")
    fun createPerson(@RequestBody newPerson: People) {
        peopleService.createPerson(newPerson)
    }

    @PostMapping("/addPersonToTeam/{personId}/{teamId}")
    fun addPersonToTeam(@PathVariable personId: Long, @PathVariable teamId: Long) {
        peopleService.switchTeams(personId, teamId)
    }
}