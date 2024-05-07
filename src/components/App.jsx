import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = JSON.parse(window.localStorage.getItem("User"));
      if (Array.isArray(savedContacts)) {
        return savedContacts;
      }
    } catch (error) {
      console.error(error);
    }
    return initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("User", JSON.stringify([...contacts]));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addUser = (user) => {
    setContacts((prev) => [...prev, user]);
  };

  const listFiltering = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handleDelete = (contactId) => {
    setContacts((prev) => prev.filter((contsct) => contsct.id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={listFiltering} onDelet={handleDelete} />
    </>
  );
}

export default App;
