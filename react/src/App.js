import React, { useState } from 'react';
import Toggle from './Toggle'
import './App.css';

function App() {
  let [names, setNames] = useState([])
  const fetchNameCount = () => {
    fetch("http://localhost:4000/count")
      .then(data => data.json())
      .then(result => {
        const newNames = []
        for(let i = 0; i < result.count; i++){
          newNames.push(<Toggle index={i}/>)
        }
        return newNames
      })
      .then(names => setNames(names));
  }
  return (
    <>
      <button onClick={fetchNameCount}>Get Names</button>
      <div className="App">{names}</div>
    </>
  );
}

export default App;
