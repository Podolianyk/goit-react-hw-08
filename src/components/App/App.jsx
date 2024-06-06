import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import css from "./App.module.css";

export default function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Create your first contact!</p>
      )}
    </div>
  );
}
