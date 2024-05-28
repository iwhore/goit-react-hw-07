import React from 'react';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(selectFiltredContacts);

  return (
    <ul className={css.listContainer}>
      {filteredContacts.map((item) => (
        <li className={css.list} key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );
}