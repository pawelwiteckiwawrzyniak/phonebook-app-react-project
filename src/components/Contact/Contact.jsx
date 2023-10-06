import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Fragment>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </Fragment>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
