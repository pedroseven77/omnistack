import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cuidado ! <code>Coronavírus</code> vai te pegar.
        </p>
        <a
          className="App-link"
          href="https://www.google.com/search?sxsrf=ALeKk02PYZrHW999-rpZe4jnywZS1x-isA%3A1585168920227&ei=GMJ7XsfADa7Y5OUPnKO96Ag&q=estudar+em+casa&oq=estudar+em+casa&gs_l=psy-ab.3...7148.8957..9291...0.2..0.197.1409.0j8......0....1..gws-wiz.......0i71j0i131i67j0j0i67j0i333.-pfAogCfRtY&ved=0ahUKEwjHrJizvrboAhUuLLkGHZxRD40Q4dUDCAo&uact=5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vai estudar
        </a>
      </header>
    </div>
  );
}

export default App;
