import React from 'react';

import logo from './logo.svg';
import './App.scss';

import Router from './pages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <body>
        <Router />
      </body>
    </div>
  );
}

export default App;
