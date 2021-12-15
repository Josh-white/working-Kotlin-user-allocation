package com.example.demo.people

import org.springframework.data.jpa.repository.JpaRepository

interface PeopleRepository: JpaRepository<People, Long> {

}
