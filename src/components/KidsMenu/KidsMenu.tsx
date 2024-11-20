// KidList.tsx
import React, { useEffect, useState, useRef } from "react";
import { Kid, KIDS_LIST } from "../library/usefulConstants";

export const KidsMenu = () => {
  localStorage.setItem(KIDS_LIST, `[{"name": "anna", "age": 2}, {"name": "zack", "age": 3}]`);
  const kidsString = localStorage.getItem(KIDS_LIST);

  if (!kidsString) {
    console.log("No kids set yet");
    return <></>;
  }

  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
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

  //   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  //   const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value);

  //   const dialogComponent = (
  //     <dialog id="addKidModal" ref={dialogRef}>
  //       <div>Add Kid</div>
  //       <span>Name: </span>
  //       <input value={name} onChange={handleNameChange} />
  //       <span>Age: </span>
  //       <input value={String(age)} onChange={handleAgeChange} />
  //       <button id="addKidSubmit" onClick={toggleDialog}>
  //         Submit
  //       </button>
  //     </dialog>
  //   );

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
        {/* <div>
          <button id="addKidButton" onClick={toggleDialog}>
            Add Kid
          </button>
        </div> */}
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
        <AddKidPopup />
      </div>
    </div>
  );
};

const AddKidPopup = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value);

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const toggleDialog = () => {
    if (dialogRef === null || !dialogRef?.current?.hasAttribute) {
      return false;
    }
    try {
      dialogRef.current.hasAttribute("open") ? dialogRef.current.close() : dialogRef.current.showModal();
    } catch (e) {
      console.warn("There was a problem toggling the AddKid popup/dialog, errMessage: ", JSON.stringify(e));
    }
  };

  const submitDialog = () => {
    console.log(`Adding kid with age ${age} and name ${name}`);
    setName("");
    setAge("");
    toggleDialog();
  };

  return (
    <div>
      <button id="addKidButton" onClick={toggleDialog}>
        Add Kid
      </button>
      <dialog id="addKidModal" ref={dialogRef}>
        <div>Add Kid</div>
        <div>
          <span>Name: </span>
          <input value={name} onChange={handleNameChange} />
        </div>
        <div>
          {" "}
          <span>Age: </span> <input value={String(age)} onChange={handleAgeChange} />
        </div>
        <button id="addKidSubmit" onClick={submitDialog}>
          Submit
        </button>
      </dialog>
    </div>
  );
};
