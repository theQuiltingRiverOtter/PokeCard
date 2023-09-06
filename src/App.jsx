import { useState } from 'react'
import PokeCard from "./PokeCard"
import "./styles/app.css"


function App() {
  const [number, setNumber] = useState(1);

  function handleClick(){
    const random = Math.floor(Math.random() * 151) + 1
    setNumber(random);
  }

  
  return (
    <div className="App">
      <PokeCard number={number} />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default App
