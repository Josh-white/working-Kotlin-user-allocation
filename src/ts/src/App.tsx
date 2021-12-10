import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Teams} from "./components/Teams";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <Teams/>
    </div>
  );
}

export default App;
