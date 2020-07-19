import React, { useEffect, useRef } from "react";

import "./styles.css";

interface Props {
  status: boolean;
  setStatus: (status: boolean) => void;
}

const Modal: React.FC<Props> = ({ setStatus, children }) => {
  const coverRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (coverRef.current) {
        coverRef.current.style.display = "flex";
        coverRef.current.classList.add("op-in");
    }

    if (modalRef.current) {
      modalRef.current.style.display = "flex";
      modalRef.current.classList.add("in");
    }

    setTimeout(() => {
      if (modalRef.current) modalRef.current.classList.remove("in");
      if (coverRef.current) coverRef.current.classList.remove("op-in");
    }, 700);
    
  }, []);

  function closeModal() {
    if (modalRef.current) modalRef.current.classList.add("out");
    if (coverRef.current) coverRef.current.classList.add("op-out");
    setTimeout(() => setStatus(false), 700);
  }

  return (
    <div id="Cover" ref={coverRef}>
      <div id="Modal" ref={modalRef}>
        {children}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
