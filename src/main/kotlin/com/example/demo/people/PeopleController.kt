package com.example.demo.people

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class PeopleController(var peopleService: PeopleService) {
    @GetMapping("/getPeople")
    fun getPeople(): List<People> {
        return peopleService.getPeople()
    }
}