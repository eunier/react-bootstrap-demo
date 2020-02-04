import React from 'react';
import Button from './components/Button';
import Jumbotron from './components/Jumbotron';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Button title="CLICK ME" />
            <Button title="NOT! CLICK ME" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Jumbotron />
          </div>

          <div className="col">
            <Jumbotron />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
