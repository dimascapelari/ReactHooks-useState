import { useState } from "react";
import "./App.css";

// Gerenciar o estado de algum valor
// getter setter

function App() {
  const [name, setName] = useState("Dimas");
  const [number, setNumber] = useState(1);

  console.log(name);

  const changeNumber = () => {
    // Previous Value (Previous state)
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
    // setNumber(number + 1);
  };

  return (
    <div className="App">
      <h2>Meu nome é {name}</h2>
      <input type="" value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        <p>Número: {number}</p>
        <button onClick={changeNumber}>Mudar número!</button>
      </div>
    </div>
  );
}

export default App;
