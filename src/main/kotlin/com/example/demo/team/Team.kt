package com.example.demo.team

import com.example.demo.people.People
import javax.persistence.*

@Entity
data class Team(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,
    var name: String = "Unallocated",

)