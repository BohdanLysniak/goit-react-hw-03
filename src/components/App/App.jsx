import { useState } from "react";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";

function App() {
  const [users, setUser] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
  ]);

  const addContact = newContact => {
    setUser(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const [filter, setFilter] = useState("");

  const filterContacts = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList usersData={filterContacts} />
    </div>
  );
}

export default App;
