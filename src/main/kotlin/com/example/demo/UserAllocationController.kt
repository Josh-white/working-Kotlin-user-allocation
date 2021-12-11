package com.example.demo

import org.springframework.web.bind.annotation.*

@RestController
class UserAllocationController(val userAllocationService: UserAllocationService)  {

    @PostMapping("/createTeam")
    fun createTeam(@RequestBody team: Team) {
        userAllocationService.saveTeam(team)
    }

    @GetMapping("/getTeams")
    fun getTeams(): List<Team> {
        return userAllocationService.getTeams()
    }
}