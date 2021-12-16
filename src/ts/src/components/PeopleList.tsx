import React from "react";
import {Person} from "../hooks/usePeople";

interface PeopleListProps {
  allPeople: Person[] | undefined
}

export const PeopleList = (props: PeopleListProps) => {
  const listOfPeople:React.ReactElement[] = []

  if (props.allPeople === undefined) {
    return (<></>)
  }

  props.allPeople.map((person) => {
    listOfPeople.push(<li key={person.id} className="person">{`Name: ${person.first} ${person.last} Team: ${person.team?.name}`}</li>)
  })

  return (
    <>
      <h2>List of People</h2>
      <ul>
        {listOfPeople}
      </ul>
    </>)
}