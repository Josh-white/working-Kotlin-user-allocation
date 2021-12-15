package com.example.demo.people

import com.example.demo.team.Team
import javax.persistence.*

@Entity
data class People(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,
    var firstName: String,
    var lastname: String,

    @ManyToOne
    var teamId: Team = Team(name = "Unallocated")
)
