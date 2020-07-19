import React, { useState } from "react";
import "./App.css";

import Modal from "./Modal";

function App() {
  const [status, setStatus] = useState(false);

  function handleOpenModal() {
    setStatus(true);
  }

  return (
    <div className="App">
      <div className="control">
        <h1>Animations</h1>
        <div className="buttons">
          <button onClick={handleOpenModal}>Open Modal</button>
        </div>
      </div>
      <div id="outlet">
        {status ? 
        <Modal status={status} setStatus={setStatus}>
          <h1>Modal</h1>
        </Modal> :
        "" }
      </div>
    </div>
  );
}

export default App;
