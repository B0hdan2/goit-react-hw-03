import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  const [contacts, setContacrs] = useState(() => {
    const savedClicks = JSON.parse(window.localStorage.getItem("User"));

    if (savedClicks !== null) {
      return savedClicks;
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("User", JSON.stringify([...contacts]));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addUser = (user) => {
    setContacrs((prev) => [...prev, user]);
  };

  const listFiltering = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handelDelet = (contactId) => {
    setContacrs((prev) => prev.filter((contsct) => contsct.id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={listFiltering} onDelet={handelDelet} />
    </>
  );
}

export default App;
