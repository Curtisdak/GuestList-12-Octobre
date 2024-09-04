import React from "react";
import { IoAddSharp, IoSearch } from "react-icons/io5";

function InputForm({ guestName, handleInput, addGuest, tableRef, handleSearch }) {
  return (
    <div className="input-container">
      <IoSearch type="button" className="addBtn" onClick={handleSearch} />
      <input
        type="text"
        value={guestName}
        onChange={handleInput}
        placeholder="Enter your Guest Name"
        className="guest-input"
        id="name"
      />
      <input
        ref={tableRef}
        type="number"
        className="number-input"
        required
        placeholder="number"
        max={15}
        min={1}
      />
      <IoAddSharp type="button" className="addBtn" onClick={addGuest} />
    </div>
  );
}

export default InputForm;
