import React from "react";
import "./PeopleList.css"
import {Person} from "../hooks/usePeople";

export const PeopleList = ({firstName, lastName, id}: Person) => {

    function preventDefault(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
    }

    function setDataForPerson(event: React.DragEvent<HTMLDivElement>) {
        const dataFromPerson = JSON.stringify(
            {
                personId: event.currentTarget.id,
            })
        return event.dataTransfer.setData("personData", dataFromPerson);
    }

    return (
        <div id={`${id}`}
            className='person'
             draggable={"true"}
             onDragStart={(event) => setDataForPerson(event)}
             onDrag={(event) => preventDefault(event)}
             onDragEnd={(event) => preventDefault(event)}>
            {firstName}, {lastName}
        </div>)
}