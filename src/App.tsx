import React from 'react';
import logo from './logo.svg';
import './App.css';


interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Corey",
  id: 0,
};

function App() {
  const helloWorld: string = 'hello world!'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {helloWorld}
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
