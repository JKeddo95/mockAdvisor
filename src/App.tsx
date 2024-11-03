import { useState } from "react";
import racecarLogo from "/racecar.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://jkeddo95.github.io/mockAdvisor/" target="_blank">
          <img src={racecarLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Mock Advisor: A Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">I want to make a difference!</p>
    </>
  );
}

export default App;
