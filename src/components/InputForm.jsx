import React from "react";
import { IoAddSharp, IoSearch } from "react-icons/io5";

function InputForm({ deactived, guestName, handleInput, addGuest, tableRef, handleSearch }) {
  return (
    <div className="input-container">
     
      <input
        type="text"
        value={guestName}
        onChange={handleInput}
        placeholder="Enter your Guest Name"
        className="guest-input"
        id="name"
      /> <IoSearch type="button" className="addBtn" onClick={handleSearch} />
     {!deactived && <input
        ref={tableRef}
        type="number"
        className="number-input"
        required
        placeholder="number"
        max={18}
        min={1}
      /> }
      { !deactived&&<IoAddSharp type="button" className="addBtn" onClick={addGuest} /> }
    </div>
  );
}

export default InputForm;
