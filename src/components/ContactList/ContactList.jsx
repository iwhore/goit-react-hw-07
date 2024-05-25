import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filterSlice";
import css from "./ContactList.module.css"

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const valueFilter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(valueFilter.toLowerCase())
  );

  return (
    <ul className={css.listContainer}>
      {filterContacts.map((item) => (
        <li className={css.list} key={item.id}>
          <Contact contact={item}/>
        </li>
      ))}
    </ul>
  );
}