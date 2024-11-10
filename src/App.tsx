import { useState } from "react";
import racecarLogo from "/racecar.svg";
import "./App.css";
import { Sidebar } from "./components/Sidebar";

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
        <Sidebar />
      </div>
      <code className="read-the-docs">I want to make a difference!</code>
    </>
  );
}

export default App;
