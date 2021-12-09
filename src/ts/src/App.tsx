import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TeamList} from "./components/TeamList";

function App() {
  const [teamList, setTeamList] = useState<string[]>([])
  const [userTypedTeam, setUserTypedTeam] = useState<string>('')

  function handleAddTeam() {
    if (teamList) {
      setTeamList(prevState => [...prevState, userTypedTeam ])
    }
  }

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTypedTeam(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <input aria-label={'enter team name'} placeholder={'enter team name'} onChange={handleUserInput}/>
      <button onClick={handleAddTeam}>
        add team
      </button>
      <TeamList teamList={teamList}/>
    </div>
  );
}

export default App;
