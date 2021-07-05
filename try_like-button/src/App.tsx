import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState(999)
  const handleClick = () => {
    setCount(count + 1)
  }
  return <span onClick={handleClick} className="likeButton">like {count}</span>
}

export default App;
