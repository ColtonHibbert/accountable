import React, {useState} from 'react';
import './App.css';
import Goal from './Goal.js';
import List from './List.js';
import GoalComment from './GoalComment.js';

function App() {
  const [count, setCount] = useState(0);
  
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
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
