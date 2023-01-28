import React from 'react';
import profileImage from './img/chai.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Infection safe environment design tool</h1>
      <h2>by Chai Um</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
