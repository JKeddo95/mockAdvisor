// KidList.tsx
import React, { useEffect, useState, useRef } from "react";
import { Kid, KIDS_LIST } from "../library/usefulConstants";

type KidListProps = {
  kids: Kid[];
};

// Usage
// <KidList kids={SAMPLE_KIDS} />

export const KidsMenu = () => {
  localStorage.setItem(KIDS_LIST, `[{"name": "anna", "age": 2}, {"name": "zack", "age": 3}]`);
  const kidsString = localStorage.getItem(KIDS_LIST);

  if (!kidsString) {
    console.log("No kids set yet");
    return <></>;
  }

  const [dialogContent, setDialogContent] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [kidsList, setKidsList] = useState([]);

  useEffect(() => {
    const kidsString = localStorage.getItem(KIDS_LIST);

    if (!kidsString) {
      console.log("No kids set yet");
      //result false;
    }

    let kids;
    try {
      console.log(`Kids string is the following: ${kidsString}`);
      kids = JSON.parse(kidsString);
      setKidsList(kids);
    } catch (error) {
      console.warn("Parsing of kids list failed. All children destroyed. Sorry :(");
      //result false;
    }
  }, []);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      console.log("Problem initializing dialogRef");
      return;
    }

    // Toggle dialog but ensure to reset state first between invocations so that multiple kids can be added.
    dialogRef.current.hasAttribute("open") ? dialogRef.current.close() : dialogRef.current.showModal();
    setName("");
    setAge("");
  }

  //   function addKid() {
  //     if (!name || !age || )
  //     kids.push()
  //   }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value);

  const dialogComponent = (
    <dialog id="addKidModal" ref={dialogRef}>
      <div>Add Kid</div>
      <span>Name: </span>
      <input value={name} onChange={handleNameChange} />
      <span>Age: </span>
      <input value={String(age)} onChange={handleAgeChange} />
      {dialogContent}
      <button id="addKidSubmit" onClick={toggleDialog}>
        Submit
      </button>
    </dialog>
  );

  if (!kidsString) {
    console.log("No kids set yet");
    return <></>;
  }

  return (
    <div>
      <br />
      <br />
      <h2>List of Kids</h2>
      <div>
        <div>
          <button id="addKidButton" onClick={toggleDialog}>
            Add Kid
          </button>
        </div>
        {kidsList.map((kid: Kid) => (
          <div style={{ float: "left" }} key={kid.name}>
            <span>
              {" "}
              {kid.name}, age {kid.age}
            </span>
            <span> | </span>
            <span style={{ color: "yellow" }} onClick={() => console.log("edit kid")}>
              edit
            </span>
            <span> | </span>
            <span style={{ color: "red" }} onClick={() => console.log("delete kid")}>
              delete
            </span>
          </div>
        ))}
        {dialogComponent}
      </div>
    </div>
  );
};
