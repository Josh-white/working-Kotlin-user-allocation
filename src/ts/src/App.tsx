import React from 'react';
import './App.css';
import {CreateTeam} from "./components/CreateTeam";
import {CreatePerson} from "./components/CreatePerson";
import {TeamList} from "./components/TeamList";
import {AllocationProvider} from "./provider/AllocationContextProvider";

function App() {

  return (
    <AllocationProvider>
      <div className="App">
        <div className="align-teams-container">
          <CreatePerson/>
          <CreateTeam/>
        </div>
        <TeamList/>
      </div>
    </AllocationProvider>
  );
}

export default App;
