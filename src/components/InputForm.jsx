
import { IoAddSharp, IoSearch } from "react-icons/io5";

function InputForm({ activated, guestName, handleInput, addGuest, tableRef, handleSearch }) {
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
     {activated && <input
        ref={tableRef}
        type="number"
        className="number-input"
        required
        placeholder="number"
        max={18}
        min={1}
      /> }
      {activated&& <IoAddSharp type="button" className="addBtn" onClick={addGuest} /> }
    </div>
  );
}

export default InputForm;
