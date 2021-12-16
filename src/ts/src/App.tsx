import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Teams} from "./components/Teams";
import {People} from "./components/People";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <People/>
      <Teams/>
    </div>
  );
}

export default App;
