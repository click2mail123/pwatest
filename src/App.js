import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const installapp = () => {
  //check if the app is installed





  //if not then install the app

}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> I am astro app </h1>
        <button onClick={installapp()}> Install App</button>

        <p>
          I am pwa test app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
