package com.example.demo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class UserAllocationController(val userAllocationService: UserAllocationService)  {
    @PostMapping("/createteam")
    fun createTeam(teamName: String) {
        userAllocationService.saveTeam(teamName)
    }

    @GetMapping("/getTeams")
    fun getTeams() {
        userAllocationService.getTeams()
    }
}