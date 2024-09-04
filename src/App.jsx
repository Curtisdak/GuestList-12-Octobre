import {useEffect,useState,useRef} from "react";
import Header from "./components/Hearder";
import InputForm from "./components/InputForm";
import GuestList from "./components/GuestList";
import ButtonGroup from "./components/ButtonGroup";
import FilterTable from "./components/FilterTable";
import SearchResults from "./components/SearchResults";
import "./App.css";

function App() {
  const [guestList, setGuestList] = useState(() => {
    const storedGuests = localStorage.getItem("storing");
    return storedGuests ? JSON.parse(storedGuests) : [];
  });

  const [Thetotal, setThetotal] = useState(() => {
    const storeTotal = localStorage.getItem("total");
    return storeTotal !== null ? Number(storeTotal) : 0;
  });

  const [present, setPresent] = useState(() => {
    const storePresent = localStorage.getItem("thePresent");
    return storePresent ? JSON.parse(storePresent) : 0;
  });

  const [openTable, setOpenTable] = useState(false);
  const [filterTable, setFilterTable] = useState(null);
  const [guestName, setGuestName] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState([]);

  const tableRef = useRef(null);
  const selectRef = useRef();

  useEffect(() => {
    localStorage.setItem("storing", JSON.stringify(guestList));
    localStorage.setItem("total", JSON.stringify(Thetotal));
    localStorage.setItem("thePresent", JSON.stringify(present));
  }, [guestList, Thetotal, present]);

  const addGuest = () => {
    const generateId = Math.random().toString(36).substring(2, 20);
    const tableNumber = tableRef.current.value;

    if (
      !guestName.trim() ||
      tableNumber > 15 ||
      tableNumber.trim() === "" ||
      tableNumber <= 0
    ) {
      alert("Les données ne sont pas bonnes");
      return;
    }

    const guestObject = {
      id: generateId,
      theGuest: guestName,
      table: tableNumber,
      checked: false,
    };

    setGuestList((prev) => [...prev, guestObject]);
    setThetotal((prevTotal) => prevTotal + 1);

    setGuestName("");
    setOpenSearch(false);
    setOpenTable(false);
    tableRef.current.value = "";
  };

  const toggleCheck = (id) => {
    setGuestList((prev) => {
      let presentCounter = present;
      const updatedGuests = prev.map((guest) => {
        if (guest.id === id) {
          const newChecked = !guest.checked;
          presentCounter += newChecked ? 1 : -1;

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
    setThetotal((prev) => (prev >= 1 ? prev - 1 : 0));
    setPresent((prev) => (prev >= 1 ? prev - 1 : 0));
    setOpenSearch(false);
    setOpenTable(false);
    localStorage.removeItem("total");
    localStorage.removeItem("thePresent");
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
      return;
    }
    const groupByTable = guestList.filter(
      (guest) => guest.table === tableSelection
    );

    setFilterTable(groupByTable);
    setOpenTable(true);
  };

  const handleSearch = () => {
    if (guestName.trim() !== "") {
      setOpenSearch(true);
      const searchGuest = guestList.filter((guest) =>
        guest.theGuest.toLowerCase().includes(guestName.toLowerCase())
      );
      setSearch(searchGuest);
    }

    setGuestName("");
  };

  return (
    <div className="main-container">
      <Header />
      <h1 className="wed-plan">Wedding Guests</h1>
      <InputForm
        guestName={guestName}
        handleInput={(e) => setGuestName(e.target.value)}
        addGuest={addGuest}
        tableRef={tableRef}
        handleSearch={handleSearch}
      />
      <ButtonGroup
        Thetotal={Thetotal}
        present={present}
        clearLocalStorage={clearLocalStorage}
      />
      <FilterTable
        guestList={guestList}
        selectRef={selectRef}
        handleSelect={handleSelect}
        openTable={openTable}
        filterTable={filterTable}
        toggleCheck={toggleCheck}
        handleDelete={handleDelete}
        handleCloseEl={() => setOpenTable(false)}
      />
      <SearchResults
        openSearch={openSearch}
        search={search}
        toggleCheck={toggleCheck}
        handleDelete={handleDelete}
        searchCloseEl={() => setOpenSearch(false)}
      />
      <GuestList
        guestList={guestList}
        toggleCheck={toggleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
