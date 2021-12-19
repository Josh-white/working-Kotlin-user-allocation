import React from "react";
import "./PeopleList.css"
import {Person} from "../hooks/usePeople";

export const PeopleList = ({firstName, lastName}: Person) => {



  return (
    <li className='person'>
       {firstName}, {lastName}
    </li>)
}