// import logo from './logo.svg';
import './App.css';

function App() {
  const handleFetch = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random")
    console.log(response)

  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={handleFetch}>Fetch</button> 
    </div>
  );
}

export default App;

//