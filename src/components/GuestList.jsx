import React from "react";
import { MdDelete } from "react-icons/md";

function GuestList({ guestList, toggleCheck, handleDelete }) {
  return (
    <div className="container">
      {guestList.map((guest) => (
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
  );
}

export default GuestList;
