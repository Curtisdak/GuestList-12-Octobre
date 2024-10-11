
import { MdDelete } from "react-icons/md";

function GuestList({ activated, guestList, toggleCheck, handleDelete }) {
  return (
    <div className="container">
      {guestList && guestList.map((guest) => (
        <div key={guest.id} className="theGuest">
          <div className="name-container">
            <input
              type="checkbox"
              className="box"
              checked={guest.checked}
              onChange={() => toggleCheck(guest.id)}
            />
            <p className="guestNames">{guest.name}</p>
          </div>
          <p>Table: {guest.tableNumber}</p>
          {activated&&<MdDelete
            className="deletBtn"
            onClick={() => handleDelete(guest.id)}
          />}
        </div>
      ))}
    </div>
  );
}

export default GuestList;
