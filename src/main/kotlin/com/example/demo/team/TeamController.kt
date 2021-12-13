package com.example.demo.team

import org.springframework.web.bind.annotation.*

@RestController
class TeamController(val teamService: TeamService)  {

    @PostMapping("/createTeam")
    fun createTeam(@RequestBody team: Team) {
        teamService.saveTeam(team)
    }

    @GetMapping("/getTeams")
    fun getTeams(): List<Team> {
        return teamService.getTeams()
    }
}