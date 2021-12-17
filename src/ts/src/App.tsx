import React from 'react';
import './App.css';
import {Teams} from "./components/Teams";
import {People} from "./components/People";

function App() {

  return (
    <div className="App">
      <div className="align-teams-container">
        <People/>
        <Teams/>
      </div>

    </div>
  );
}

export default App;
