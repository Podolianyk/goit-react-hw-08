import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts); // Підписуємо компонент на стан за допомогою  useSelector(), це нам потрібно щоб отримати доступ до реакт-стану наших items. У функцію передаємо селектор стану, який ми експортували у contactsSlice.js
  const filters = useSelector(selectNameFilter);
  const filtereContacts = contacts.filter((contact) => {
    contact.name.toLowerCase().includes(filters.toLowerCase());
  });

  return (
    <ul className={css.list}>
      {filtereContacts.map((contact) => {
        <li className={css.listItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>;
      })}
    </ul>
  );
}
