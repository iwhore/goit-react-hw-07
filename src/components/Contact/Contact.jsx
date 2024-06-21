import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({contact}) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.container}>
      <div>
        <p>
          <IoPerson /> {contact.name}
        </p>
        <p>
          <BsFillTelephoneFill /> {contact.number}
        </p>
      </div>

      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}