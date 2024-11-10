import { useState } from "react";

export const Sidebar = () => {
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
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", maxWidth: "60%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        First Name: <input value={firstName} onChange={handleFirstNameChange} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Last Name: <input value={lastName} onChange={handleLastNameChange} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Middle Initial: <input value={middleInitial} onChange={handleMiddleInitialChange} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Date of Birth: <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
      </div>
      <div>{dateOfBirth}</div>
    </div>
  );
};
