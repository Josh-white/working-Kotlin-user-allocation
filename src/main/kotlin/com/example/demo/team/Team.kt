package com.example.demo.team

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Team(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var teamId: Long = 0,
    var teamName: String = "Unallocated"
) {


}