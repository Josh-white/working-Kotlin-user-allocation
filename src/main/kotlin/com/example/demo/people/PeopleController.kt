package com.example.demo.people

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

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
}