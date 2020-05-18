import React from 'react';
import './App.css';

function App() {
  
  return (
    <div className="App">
     
      <div onClick={() => fetch('http://localhost:3001/hi')}>
      get
      </div>
    </div>
  );
}

export default App;
