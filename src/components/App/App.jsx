import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";


export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <p>{isError}</p>}
      <ContactList />
    </div>
  );
}