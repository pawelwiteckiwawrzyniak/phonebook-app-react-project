import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Fragment, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Fragment>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactFilter />
        {isLoading ? <p>Loading...</p> : <ContactList />}
      </Fragment>
    </HelmetProvider>
  );
}
