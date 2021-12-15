package com.example.demo.people

import org.springframework.stereotype.Service

@Service
class PeopleService(var peopleRepository: PeopleRepository) {
    fun getPeople(): List<People> {
        return peopleRepository.findAll()
    }

    fun createPerson(newPerson: People): People {
        return peopleRepository.save(newPerson)
    }

}
