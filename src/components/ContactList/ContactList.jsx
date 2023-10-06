import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactList__item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
