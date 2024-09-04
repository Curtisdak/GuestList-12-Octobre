import React from "react";

function ButtonGroup({ Thetotal, present, clearLocalStorage }) {
  return (
    <div className="btn-container">
      <button type="button" className="Btn">
        total <span>{Thetotal}</span>
      </button>
      <button type="button" className="Btn">
        present <span>{present}</span>
      </button>
      {/* <h3 type="button" onClick={clearLocalStorage} className=""> */}
        {/* clear */}
      {/* </h3> */}
    </div>
  );
}

export default ButtonGroup;
