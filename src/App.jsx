// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [fact, setFact] = useState("")
  
  const handleFetch = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random")
    const data = await response.json()
    setFact(data.text)

  }
  return (
    <div className="App">
      <h1>{fact}</h1>
      <button onClick={handleFetch}>Fetch</button> 
    </div>
  );
}

export default App;

//