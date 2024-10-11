
import PropTypes from "prop-types"; // Importing PropTypes
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
          <option value="all tables">All Tables</option>
          {Array.from({ length: 18 }, (_, i) => ( // Adjusted length to 18
            <option key={i + 1} value={i + 1}>
              Table {i + 1}
            </option>
          ))}
        </select>
      </div>

      {openTable && (
        <div className="filter-result">
          <div className="closeBtn-container">
            Guests on Table {selectRef.current.value}
            <IoCloseSharp className="closeBtn" onClick={handleCloseEl} />
          </div>
          {filterTable &&
            filterTable.map((guest) => (
              <div key={guest.id} className="theGuest">
                <div className="name-container">
                  <input
                    type="checkbox"
                    className="box"
                    checked={guest.checked}
                    onChange={() => toggleCheck(guest.id)}
                  />
                  <p>{guest.name}</p>
                </div>
                <p>Table: {guest.tableNumber}</p>
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

// Defining PropTypes for FilterTable
FilterTable.propTypes = {
  guestList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      table: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  selectRef: PropTypes.object.isRequired, // Can be more specific if needed
  handleSelect: PropTypes.func.isRequired,
  openTable: PropTypes.bool.isRequired,
  filterTable: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      table: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleCheck: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCloseEl: PropTypes.func.isRequired,
};

export default FilterTable;
