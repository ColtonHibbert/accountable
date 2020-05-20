import React from 'react';
import './App.css';
import Goal from './Goal.js';
import List from './List.js';
import GoalComment from './GoalComment.js';

function App() {
  
  return (
    <div className="App">
      <List>
        <Goal>
        </Goal>
        <GoalComment></GoalComment>
      </List>
      <div onClick={() => fetch('http://localhost:3001/hi')}>
      get
      </div>
    </div>
  );
}

export default App;
