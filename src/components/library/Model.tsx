import React, { useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} onClose={onClose}>
      {children}
      <button onClick={onClose}>Close</button>
    </dialog>
  );
};

export default Modal;
