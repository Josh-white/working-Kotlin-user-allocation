package com.example.demo

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Team(
    @Id
    @GeneratedValue
    var id: Long,
    var name: String
) {


}