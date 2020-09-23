import React from 'react';

import './App.scss';
import Router from './pages';
import Header from './components/Header';

function App() {
  return (
		<div>
			<Header />
			<div className="container">
        <Router />
			</div>
    </div>
  );
}

export default App;
