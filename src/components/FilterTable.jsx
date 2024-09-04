import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function FilterTable({
  guestList,
  selectRef,
  handleSelect,
  openTable,
  filterTable,
  toggleCheck,
  handleDelete,
  handleCloseEl,
}) {
  return (
    <>
      <div className="filter-container">
        <p>La liste des invités</p>
        <select
          name="table"
          id="table-no"
          ref={selectRef}
          onChange={handleSelect}
        >
          <option value="0">All Tables</option>
          {Array.from({ length: 15 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Table {i + 1}
            </option>
          ))}
        </select>
      </div>

      {openTable && (
        <div className="filter-result">
          <div className="closeBtn-container">
            Guest on the Table 0{selectRef.current.value}
            <IoCloseSharp className="closeBtn" onClick={handleCloseEl} />
          </div>
          {filterTable.map((guest) => (
            <div key={guest.id} className="theGuest">
              <div className="name-container">
                <input
                  type="checkbox"
                  className="box"
                  checked={guest.checked}
                  onChange={() => toggleCheck(guest.id)}
                />
                <p>{guest.theGuest}</p>
              </div>
              <p>Table: {guest.table}</p>
              <MdDelete
                className="deletBtn"
                onClick={() => handleDelete(guest.id)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default FilterTable;
