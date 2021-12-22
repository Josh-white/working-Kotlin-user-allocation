import React from "react";
import "./PeopleList.css"
import {Person} from "../hooks/usePeople";

export const PeopleList = ({firstName, lastName}: Person) => {


    function preventDefault(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
    }

    return (
        <div className='person'
            draggable={"true"}
            onDrag={(event) => preventDefault(event)}
            onDragEnd={(event) => preventDefault(event)}>
            {firstName}, {lastName}
        </div>)
}