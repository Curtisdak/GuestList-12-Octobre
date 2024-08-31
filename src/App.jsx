import { useState, useRef, useEffect } from "react";
import { IoAddSharp, IoSearch, IoCloseSharp } from "react-icons/io5";
import pic from "./assets/pic02.png"
import { MdDelete } from "react-icons/md";
import "./App.css";

function App() {
  const [guestList, setGuestList] = useState(() => {
    const storedGuests = localStorage.getItem("storing");
    return storedGuests ? JSON.parse(storedGuests) : [];
  });

  const [Thetotal, setThetotal] = useState(() => {
    const storeTotal = localStorage.getItem("total");
    return storeTotal ? JSON.parse(storeTotal) : 0;
  });

  const [present, setPresent] = useState(() => {
    const storePresent = localStorage.getItem("thePresent");
    return storePresent ? JSON.parse(storePresent) : 0;
  });

  const [openTable, setOpenTable] = useState(false);
  const [filterTable, setFilterTable] = useState(null);

  useEffect(() => {
    localStorage.setItem("storing", JSON.stringify(guestList));
    localStorage.setItem("total", JSON.stringify(Thetotal));
    localStorage.setItem("thePresent", JSON.stringify(present));
  }, [guestList, Thetotal, present]);

  const [guestName, setGuestName] = useState("");
  const tableRef = useRef(null);
  const selectRef = useRef();
  const [openSearch, setOpenSearch]=useState(false)
  const [search, setSearch] = useState([])

  const handleInput = (e) => {
    setGuestName(e.target.value);
  };

  const addGuest = () => {
    const generateId = Math.random().toString(36).substring(2, 20);
    const tableNumber = tableRef.current.value;

    if (
      !guestName.trim() ||
      tableNumber > 7 ||
      tableNumber.trim() === "" ||
      tableNumber <= 0
    ) {
      alert("Les données ne sont pas bonnes");
      return setGuestList((prev)=> [...prev ]);
    }

    const guestObject = {
      id: generateId,
      theGuest: guestName,
      table: tableNumber,
      checked: false,
    };

    setGuestList((prev) => [...prev, guestObject]);
    setThetotal((prevTotal) => prevTotal + 1);

    // Reset input fields
    setGuestName("");
    setOpenSearch(false)
    setOpenTable(false)
    tableRef.current.value = "";
  };

  const toggleCheck = (id) => {
    setGuestList((prev) => {
      let presentCounter = present;
      const updatedGuests = prev.map((guest) => {
        if (guest.id === id) {
          const newChecked = !guest.checked;
          presentCounter += newChecked ? +1 : -1;

          return { ...guest, checked: newChecked };
        }
        return guest;
      });
      setPresent(presentCounter);
      return updatedGuests;
    });
  };

  const handleDelete = (id) => {
    const deleteEl = guestList.filter((prev) => prev.id !== id);
    setGuestList(deleteEl);
    setThetotal((prev) => prev - 1);
    console.log(id);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("storing");
    localStorage.removeItem("total");
    localStorage.removeItem("thePresent");
    setGuestList([]);
    setThetotal(0);
    setPresent(0);
    setFilterTable([]);
  };

  const handleSelect = () => {
    const tableSelection = selectRef.current.value;
    if (tableSelection === "0") {
      setOpenTable(false);
      setFilterTable(guestList);
    }
    const groupByTable = guestList.filter(
      (guest) => guest.table === tableSelection
    );

    setFilterTable(groupByTable);
    setOpenTable(true);
  };

  const handleSearch = () => {
    if (guestName.trim() !== "") {
      setOpenSearch(true)
      const searchGuest = guestList.filter((guest) =>
        guest.theGuest.toLowerCase().includes(guestName.toLowerCase())
      );
      setSearch(searchGuest);
    }

    setGuestName("")
    console.log("kirikou")
  };

  const handleCloseEl = () => {
    setOpenTable(false);
    selectRef.current.value = "0";
  };

  const searchCloseEl = ()=>{
    setOpenSearch(false)
    setGuestName("")
  }

  return (
    <div className="main-container">
      <div className="pic-container">
        <img src={pic} alt="" />
      </div>
      <h1 className="wed-plan">Wedding Guests</h1>
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
          max={7}
          min={1}
        />
        <IoAddSharp type="button" className="addBtn" onClick={addGuest} />
      </div>

      <div className="btn-container">
        <button type="button" className="Btn">
          total <span>{Thetotal}</span>
        </button>
        <button type="button" className="Btn">
          present <span>{present}</span>
        </button>
        <h3 type="button" onClick={clearLocalStorage} className="">
          clear
        </h3>
      </div>

      <div className="filter-container">
        <p>La liste des invités</p>

        <select
          name="table"
          id="table-no"
          ref={selectRef}
          onChange={() => handleSelect()}
          onClick={handleSelect}
        >
          <option value="0">All Tables</option>
          <option value="1">Table 01</option>
          <option value="2">Table 02</option>
          <option value="3">Table 03</option>
          <option value="4">Table 04</option>
          <option value="5">Table 05</option>
          <option value="6">Table 06</option>
          <option value="7">Table 07</option>
        </select>
      </div>

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
              onClick={() => {
                handleDelete(guest.id);
              }}
            />
          </div>
        ))}

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
                  onClick={() => {
                    handleDelete(guest.id);
                  }}
                />
              </div>
            ))}
          </div>
        )}


{openSearch && (
  <div className="filter-result">
    <div className="closeBtn-container">
      Guest found 
      <IoCloseSharp className="closeBtn" onClick={searchCloseEl} />
    </div>
    {search.map((guest) => (
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
          onClick={() => {
            handleDelete(guest.id);
          }}
        />
      </div>
    ))}
  </div>
)}

        
      </div>
    </div>
  );
}

export default App;
