import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function getHello() {
    const great = document.getElementById("greet");
    fetch(import.meta.env.VITE_API_SERVER + "/api/hello")
      .then((res) => res.json())
      .then((data) => (great.innerHTML = JSON.stringify(data)));
  }
  useEffect(getHello);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React !</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          my count is {count}
        </button>
        <p>
          api called : <code id="greet"></code>
        </p>
        <p>
          Edit !<code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
