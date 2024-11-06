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
        <SideBarComponent />
      </div>
      <code className="read-the-docs">I want to make a difference!</code>
    </>
  );
}

const SideBarComponent = () => {
  // Handle "Auth Advisor Experts" corrections of AI errors/hallucinations.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value);
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value);
  const handleMiddleInitialChange = (e: React.ChangeEvent<HTMLInputElement>) => setMiddleInitial(e.target.value);
  const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => setDateOfBirth(e.target.value);

  return (
    <div style={{ flex: "flex-grow" }}>
      <div>
        First Name: <input value={firstName} onChange={handleFirstNameChange} />
      </div>
      <div>
        Last Name: <input value={lastName} onChange={handleLastNameChange} />
      </div>
      <div>
        Middle Initial: <input value={middleInitial} onChange={handleMiddleInitialChange} />
      </div>
      <div>
        Date of Birth: <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
      </div>
      <div>{dateOfBirth}</div>
    </div>
  );
};

export default App;
