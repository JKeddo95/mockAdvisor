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

  let kids;
  try {
    console.log(`Kids string is the following: ${kidsString}`);
    kids = JSON.parse(kidsString);
  } catch (error) {
    console.warn("Parsing of kids list failed. All children destroyed. Sorry :(");
    return false;
  }

  const [dialogContent, setDialogContent] = useState(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      console.log("Problem initializing dialogRef");
      return;
    }
    dialogRef.current.hasAttribute("open") ? dialogRef.current.close() : dialogRef.current.showModal();
  }

  const dialogComponent = (
    <dialog id="addKidModal" ref={dialogRef}>
      <div>Add Kid</div>
      {dialogContent}
      <button id="addKidSubmit" onClick={toggleDialog}>
        Submit
      </button>
    </dialog>
  );

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
        {kids.map((kid: Kid) => (
          <div style={{ float: "left" }} key={kid.name}>
            <span>
              {" "}
              {kid.name}, age {kid.age}
            </span>
            <span> | </span>
            <span style={{ color: "yellow" }}>edit</span>
            <span> | </span>
            <span style={{ color: "red" }}>delete</span>
          </div>
        ))}
        {dialogComponent}
      </div>
    </div>
  );
};
